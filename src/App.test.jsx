import { render, screen } from "@testing-library/react";
import App from "./App";

test("presenta la propuesta comercial en español", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /publicidad deportiva con narrativa que deja huella/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /hablemos de tu campaña/i })).toBeInTheDocument();
});


test("permite cambiar la propuesta comercial al inglés", async () => {
  const { user } = await import("@testing-library/user-event").then(({ default: setup }) => ({ user: setup.setup() }));
  render(<App />);

  await user.click(screen.getByRole("button", { name: /switch to english/i }));

  expect(
    screen.getByRole("heading", { name: /sports advertising with stories that leave a mark/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /let's discuss your campaign/i })).toBeInTheDocument();
});


test("explica la propuesta B2B sin publicar tarifas", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /una audiencia que no pasa de largo/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /integraciones hechas para tu marca/i })).toBeInTheDocument();
  expect(screen.getByText(/propuesta a medida/i)).toBeInTheDocument();
  expect(screen.queryByText(/US \$/i)).not.toBeInTheDocument();
});
