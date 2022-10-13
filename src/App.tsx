/* eslint-disable jsx-a11y/label-has-associated-control */
import { Envelope, Lock } from "phosphor-react";
import { TextField } from "./components/TextField";
import { TextInput } from "./components/TextInput";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 px-6">
      <div className="max-w-[400px] w-full">
        <header className="flex flex-col items-center">
          <Logo />
          <Heading size="lg" className="mt-4">
            Ignite Lab
          </Heading>
          <TextField size="lg" className="mt-1 text-gray-400">
            Faça login e comece a usar
          </TextField>
        </header>

        <form className="flex flex-col gap-4 items-stretch mt-10">
          <label className="font-semibold flex flex-col gap-3">
            <TextField>Endereço de e-mail</TextField>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id="email" placeholder="Digite seu email" />
            </TextInput.Root>
          </label>

          <label className="font-semibold flex flex-col gap-3">
            <TextField>Endereço de e-mail</TextField>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input id="password" placeholder="********" />
            </TextInput.Root>
          </label>

          <label className="flex gap-2 items-center cursor-pointer">
            <Checkbox />
            <TextField size="md">Lembrar de mim por 30 dias</TextField>
          </label>

          <div className="mt-4">
            <Button className="mt-4">Entrar na plataforma</Button>
          </div>
        </form>

        <div className="mt-8 flex flex-col justify-center items-center gap-4">
          <TextField asChild className="underline text-gray-400">
            <a href="/recovery-password" target="">
              Esqueceu a senha?
            </a>
          </TextField>

          <TextField asChild className="underline text-gray-400">
            <a href="/signup" target="">
              Não possui conta? Crie uma agora!
            </a>
          </TextField>
        </div>
      </div>
    </div>
  );
}

export default App;
