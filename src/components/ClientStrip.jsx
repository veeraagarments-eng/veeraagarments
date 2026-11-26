import Container from "./Container.jsx";

const slots = ["Client logo", "Client logo", "Client logo", "Client logo", "Client logo", "Client logo"];

export default function ClientStrip() {
  return (
    <section className="border-y border-blue/10 bg-white py-14">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-orange uppercase">Trusted partners</p>
          <h2 className="mt-2 text-3xl font-bold text-ink">Our Clients</h2>
          <p className="mt-2 text-sm text-ink/60">Client logos will be added when they are shared.</p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {slots.map((slot, index) => (
            <li
              key={`${slot}-${index}`}
              className="flex h-20 items-center justify-center rounded-xl border border-dashed border-blue/25 bg-paper text-xs font-semibold tracking-wide text-blue/70 uppercase"
            >
              {slot}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
