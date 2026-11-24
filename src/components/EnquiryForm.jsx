import { useEffect, useId, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import siteConfig, { whatsappUrl } from "../data/siteConfig.js";
import { productOptions } from "../data/products.js";
import Button from "./Button.jsx";
import cx from "../utils/cx.js";

const initialValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
  website: "",
};

function validate(values) {
  const errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = "Enter your full name.";
  if (values.company.trim().length < 2) errors.company = "Enter your company name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    errors.phone = "Enter a valid phone number with 8 to 15 digits.";
  }
  if (values.country.trim().length < 2) errors.country = "Enter your country.";
  if (!values.product) errors.product = "Select a product.";
  if (values.quantity.trim().length > 60) errors.quantity = "Use a shorter quantity note.";
  if (values.message.trim().length < 10) {
    errors.message = "Enter a message of at least 10 characters.";
  }
  return errors;
}

function enquiryBody(values) {
  return [
    "Hello VEERAA GARMENTS, I would like to enquire about fabric bags.",
    "",
    `Name: ${values.fullName.trim()}`,
    `Company: ${values.company.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Country: ${values.country.trim()}`,
    `Product: ${values.product}`,
    `Quantity: ${values.quantity.trim() || "Not specified"}`,
    "",
    values.message.trim(),
  ].join("\n");
}

export default function EnquiryForm() {
  const formId = useId();
  const [searchParams] = useSearchParams();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const statusRef = useRef(null);

  useEffect(() => {
    const product = searchParams.get("product");
    if (product && productOptions.includes(product)) {
      setValues((current) => ({ ...current, product }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (status === "success" || status === "unconfigured" || status === "send-error" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus((current) => (current === "submitting" ? current : "idle"));
  }

  async function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }
    if (values.website.trim()) {
      setStatus("send-error");
      return;
    }

    const endpoint = siteConfig.enquiry.endpoint.trim();
    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          country: values.country.trim(),
          product: values.product,
          quantity: values.quantity.trim(),
          message: values.message.trim(),
          source: "veeraa-garments-website",
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("send-error");
    }
  }

  function openEmail() {
    const subject = encodeURIComponent("Fabric bag enquiry — VEERAA GARMENTS");
    const body = encodeURIComponent(enquiryBody(values));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  const inputClass = (invalid) =>
    cx(
      "w-full min-h-12 border bg-ivory px-4 py-3 text-base text-charcoal outline-none transition-colors sm:text-sm",
      invalid ? "border-clay" : "border-charcoal/15 focus:border-forest",
    );

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>
          Website
          <input
            id={`${formId}-website`}
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-name`} label="Full Name" error={errors.fullName} required>
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            className={inputClass(errors.fullName)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? `${formId}-name-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-company`} label="Company Name" error={errors.company} required>
          <input
            id={`${formId}-company`}
            name="organization"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            className={inputClass(errors.company)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `${formId}-company-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-email`} label="Email Address" error={errors.email} required>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass(errors.email)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-phone`} label="Phone Number" error={errors.phone} required>
          <input
            id={`${formId}-phone`}
            name="tel"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass(errors.phone)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-country`} label="Country" error={errors.country} required>
          <input
            id={`${formId}-country`}
            name="country"
            autoComplete="country-name"
            value={values.country}
            onChange={(event) => update("country", event.target.value)}
            className={inputClass(errors.country)}
            aria-invalid={Boolean(errors.country)}
            aria-describedby={errors.country ? `${formId}-country-error` : undefined}
            required
          />
        </Field>
        <Field id={`${formId}-product`} label="Product Interested In" error={errors.product} required>
          <div className="relative">
            <select
              id={`${formId}-product`}
              name="product"
              value={values.product}
              onChange={(event) => update("product", event.target.value)}
              className={cx(inputClass(errors.product), "appearance-none pr-10")}
              aria-invalid={Boolean(errors.product)}
              aria-describedby={errors.product ? `${formId}-product-error` : undefined}
              required
            >
              <option value="">Select a product</option>
              {productOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-forest" aria-hidden="true">
              ▾
            </span>
          </div>
        </Field>
      </div>

      <Field id={`${formId}-quantity`} label="Quantity Required" error={errors.quantity} hint="Optional">
        <input
          id={`${formId}-quantity`}
          name="quantity"
          value={values.quantity}
          onChange={(event) => update("quantity", event.target.value)}
          className={inputClass(errors.quantity)}
          aria-invalid={Boolean(errors.quantity)}
          aria-describedby={errors.quantity ? `${formId}-quantity-error` : undefined}
          placeholder="Estimated quantity"
        />
      </Field>

      <Field id={`${formId}-message`} label="Message" error={errors.message} required>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className={cx(inputClass(errors.message), "min-h-32 resize-y")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          required
        />
      </Field>

      {status === "error" ? (
        <p ref={statusRef} tabIndex={-1} role="alert" className="text-sm text-clay">
          Please correct the highlighted fields. The enquiry has not been sent.
        </p>
      ) : null}
      {status === "success" ? (
        <p ref={statusRef} tabIndex={-1} role="status" className="bg-forest px-4 py-3 text-sm leading-relaxed text-ivory">
          Your enquiry was sent. VEERAA Garments will contact you using the details provided.
        </p>
      ) : null}
      {status === "send-error" ? (
        <p ref={statusRef} tabIndex={-1} role="alert" className="bg-beige px-4 py-3 text-sm leading-relaxed text-clay">
          The enquiry could not be sent. Please try again, or use email or WhatsApp.
        </p>
      ) : null}
      {status === "unconfigured" ? (
        <div ref={statusRef} tabIndex={-1} role="status" className="space-y-4 bg-beige px-4 py-4 text-sm leading-relaxed text-charcoal">
          <p>
            This form is not connected to an enquiry inbox yet. Your details were
            checked, and nothing has been submitted to VEERAA Garments.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="button" variant="solid" onClick={openEmail}>
              Email this enquiry
            </Button>
            <Button href={whatsappUrl(enquiryBody(values))} variant="outline">
              Continue on WhatsApp
            </Button>
          </div>
        </div>
      ) : null}

      <Button type="submit" variant="solid" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}

function Field({ id, label, error, required = false, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest">
        <span>
          {label}
          {required ? <span className="text-clay"> *</span> : null}
        </span>
        {hint ? <span className="font-medium tracking-normal text-charcoal/50 normal-case">{hint}</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
