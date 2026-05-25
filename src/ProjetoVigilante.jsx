<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Activity } from "lucide-react";

export default function ProjetoVigilante() {
<<<<<<< HEAD
=======

  const [checkedItems, setCheckedItems] = useState({});

  const toggleExercise = (id) => {
  setCheckedItems((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};

  const getWorkoutProgress = (title, exercises) => {
  const completed = exercises.filter(
    (_, i) => checkedItems[`${title}-${i}`]
  ).length;

  return {
    completed,
    total: exercises.length,
    percentage:
      exercises.length > 0
        ? Math.round((completed / exercises.length) * 100)
        : 0,
  };
};

>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-4 py-10 font-sans">
      {/* HEADER */}
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-yellow-400 tracking-tight drop-shadow-lg">
<<<<<<< HEAD
          🦇 Projeto Vigilante — Fase 1
        </h1>
        <p className="text-neutral-400 mt-4 text-lg">
          Powerbuilding + Muay Thai — treinos de até 60 minutos
=======
          🦇<br></br>Projeto Vigilante
        </h1>
        <p className="text-neutral-400 mt-4 text-lg">
          Se tornando uma pessoa melhor com a guarda de São Miguel Arcanjo
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto flex flex-col gap-12">

        {/* GRID PRINCIPAL */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Estrutura Semanal */}
          <Card className="bg-neutral-900/60 border-neutral-800 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-200">
            <CardContent className="p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-yellow-400 mb-4">
<<<<<<< HEAD
                <Dumbbell size={20} /> Estrutura semanal
              </h2>

              <ul className="text-neutral-300 space-y-2 leading-relaxed">
                <li><strong>Segunda:</strong> Sombras de Gotham + Muay Thai</li>
                <li><strong>Terça:</strong> Forja do Cavaleiro</li>
                <li><strong>Quarta:</strong> Ascensão do Vigilante + Muay Thai</li>
                <li><strong>Quinta:</strong> Cardio (1h)</li>
                <li><strong>Sexta:</strong> Centro da Tempestade</li>
                <li><strong>Sábado:</strong> Modo Predador</li>
                <li><strong>Domingo:</strong> Cardio leve / descanso ativo</li>
=======
                <Dumbbell size={20} /> Rotina semanal
              </h2>

              <ul className="text-neutral-300 space-y-2 leading-relaxed">
                <li><strong>Segunda:</strong> <p> </p> Treino de Upper + Tríceps</li>
                <p> </p>
                <li><strong>Terça:</strong> <p> </p> Treino de Lower (Quadríceps + Panturrilha)</li>
                <p> </p>
                <li><strong>Quarta:</strong> <p> </p> Descanso ativo</li>
                <p> </p>
                <li><strong>Quinta:</strong> <p> </p> Treino de Upper + Bíceps</li>
                <p> </p>
                <li><strong>Sexta:</strong> <p> </p> Treino de Lower (Posterior + Glúteos)</li>
                <p> </p>
                <li><strong>Sábado:</strong> <p> </p> Treino de explosão</li>
                <p> </p>
                <li><strong>Domingo:</strong> <p> </p> Descanso total</li>
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
              </ul>
            </CardContent>
          </Card>

          {/* Diretrizes */}
          <Card className="bg-neutral-900/60 border-neutral-800 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-200">
            <CardContent className="p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-yellow-400 mb-4">
                <Activity size={20} /> Diretrizes
              </h2>

              <div className="text-neutral-300 space-y-2 leading-relaxed">
<<<<<<< HEAD
                <p>• Descanso: <strong>60–90s</strong> principais / <strong>30–60s</strong> auxiliares.</p>
                <p>• Progressão: aumente a carga com forma perfeita.</p>
                <p>• Mobilidade: 5–10 min antes e após treinos.</p>
                <p>• Sono: 7–9h por noite.</p>
                <p>• Nutrição: proteína, carboidratos complexos, boas gorduras.</p>
=======
                <p><strong>Descanso:</strong></p>
                <p>60–90s principais / 30–60s auxiliares.</p>
                <p> </p>
                <p><strong>Progressão:</strong></p>
                <p>Aumente a carga de forma recorrente.</p>
                <p> </p>
                <p><strong>Mobilidade:</strong></p>
                <p>5–10 min antes e após treinos.</p>
                <p> </p>
                <p><strong>Sono:</strong></p>
                <p>7–9h por noite.</p>
                <p> </p>
                <p><strong>Nutrição:</strong></p>
                <p>Alta proteína e carboidratos complexos.</p>
                <p> </p>
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
              </div>
            </CardContent>
          </Card>

        </section>

        {/* TREINOS */}
        <section className="flex flex-col gap-10">
          {[

            {
<<<<<<< HEAD
              title: "🦇 Segunda — Sombras de Gotham",
              focus: "Potência de pernas e estabilidade para chutes.",
              exercises: [
                "Agachamento livre — 4x8",
                "Levantamento terra romeno — 4x6",
                "Leg press 45° — 3x10",
                "Panturrilha em pé — 4x12",
                "Prancha isométrica — 3x até a falha",
=======
              title: "Segunda",
              focus: "Força e volume de upper, com ênfase em tríceps",
              exercises:
              [
                "Remada Cavalinho (T-bar row) — 1×12 + 4×6",
                "Remada baixa no cabo (triângulo ou pegada neutra) — 4x8",
                "Supino inclinado com halteres — 4×6",
                "Supino reto com barra — 4×8",
                "Desenvolvimento com halteres — 3×8",
                "Tríceps testa com barra (skull crusher) — 3×8–10",
                "Tríceps francês com halter (overhead) — 3×8–10",
                "Tríceps corda no cabo — 3×8–10",
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
              ],
            },

            {
<<<<<<< HEAD
              title: "⚙️ Terça — Forja do Cavaleiro",
              focus: "Força de empurrar e resistência de golpes.",
              exercises: [
                "Supino reto barra — 4x6–8",
                "Supino inclinado halteres — 3x8–10",
                "Crucifixo reto — 3x10–12",
                "Barra fixa / puxada — 4x6",
                "Remada curvada — 3x6–8",
                "Desenvolvimento militar — 3x6",
                "Tríceps testa — 3x8",
                "Bíceps rosca direta — 3x8",
=======
              title: "Terça",
              focus: "Volume máximo em quadríceps e panturrilha",
              exercises:
              [
                "Agachamento livre — 1×12 + 4×6",
                "Leg press 45° — 4×10",
                "Hack squat — 3×10–12",
                "Agachamento búlgaro com halteres — 3×8",
                "Extensora — 3×12",
                "Panturrilha em pé — 4×15",
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
              ],
            },

            {
<<<<<<< HEAD
              title: "🦾 Quarta — Ascensão do Vigilante",
              focus: "Estabilidade e resistência de tronco.",
              exercises: [
                "Agachamento hack — 4x10",
                "Stiff halteres — 3x10",
                "Extensora — 3x12",
                "Flexora — 3x12",
                "Panturrilha sentado — 4x15",
                "Abdominal máquina — 3x15",
=======
              title: "Quarta",
              focus: "Se manter ativo e deixar os músculos descansarem",
              exercises:
              [
                "Descanso ativo: Cardio + Mobilidade",
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
              ],
            },

            {
<<<<<<< HEAD
              title: "⚔️ Sexta — Centro da Tempestade",
              focus: "Resistência global e sinergia muscular.",
              exercises: [
                "Supino inclinado halter — 3x8–10",
                "Crucifixo inclinado — 3x12",
                "Remada unilateral — 3x8–10",
                "Crucifixo invertido — 3x12",
                "Elevação lateral — 3x12–15",
                "Tríceps corda — 3x12",
                "Bíceps alternado — 3x10–12",
=======
              title: "Quinta",
              focus: "Upper com foco em volume e ênfase em bíceps",
              exercises: [
                "Supino com halteres — 1×12 + 4×8",
                "Peck deck (crucifixo na máquina) — 4×10–12",
                "Remada Cavalinho (T-bar row) — 4×6",
                "Puxada alta com pegada neutra ou triângulo — 4×8",
                "Elevação lateral com halteres sentado — 3×12–15",
                "Rosca scott com barra W (skull crusher) — 3×8–10",
                "Rosca alternada com halteres — 3×8–10",
                "Rosca inclinada com halteres — 3×8–10",
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
              ],
            },

            {
<<<<<<< HEAD
              title: "💥 Sábado — Modo Predador",
              focus: "Explosão, performance e coordenação.",
              exercises: [
                "Levantamento terra — 4x6",
                "Agachamento com salto — 3x10",
                "Flexão pliométrica — 3x8–10",
                "Remada TRX — 3x10",
                "Prancha isométrica — 3x falha",
                "Prancha lateral — 3x falha técnica",
                "Battle Rope — 3x30s",
              ],
            },

          ].map((treino, index) => (
            <Card
              key={index}
              className="bg-neutral-900/60 border-neutral-800 backdrop-blur-sm shadow-lg hover:scale-[1.01] hover:border-yellow-500/40 transition-all duration-200"
            >
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-5 tracking-wide">
                  {treino.title}
                </h3>

                <ol className="list-decimal list-inside text-neutral-300 space-y-2 text-lg leading-relaxed">
                  {treino.exercises.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ol>

                <p className="text-sm text-neutral-500 mt-5 italic">
                  Foco: {treino.focus}
                </p>
              </CardContent>
            </Card>
          ))}
=======
              title: "Sexta",
              focus: "Força e hipertrofia de posterior e glúteos",
              exercises: [
                "Afundo no smith — 1×12 + 4×8",
                "Stiff com halteres — 4×10",
                "Flexora deitada — 4×10–12",
                "Leg press com pés altos e afastados — 4×10",
                "Elevação pélvica — 4×10",
                "Abdução no cabo ou máquina — 3x12–15",
              ],
            },

            {
              title: "Sábado",
              focus: "Potência, explosão e condicionamento metabólico",
              exercises: [
                "Levantamento terra — 1×12 + 3x6",
                "Agachamento com salto — 3x10",
                "Flexão pliométrica — 3x10",
                "Remada TRX — 3x10",
                "Abdominal na máquina — 3x15",
                "Elevação de pernas suspenso — 3x15",
                "Prancha isométrica — 3x falha",
                "Remo ergométrico — 250m sprint / descanso 45s, 6–8 rounds",
              ],
            },

            {
              title: "Domingo",
              focus: "Repouso também faz parte do crescimento",
              exercises:
              [
                "Descanso total",
              ],
            },

          ].map((treino, index) => {

  const progress = getWorkoutProgress(
    treino.title,
    treino.exercises
  );

  return (
    <Card
      key={index}
      className="bg-neutral-900/60 border-neutral-800 backdrop-blur-sm shadow-lg hover:scale-[1.01] hover:border-yellow-500/40 transition-all duration-200"
    >
      <CardContent className="p-8">

        <h3 className="text-3xl font-bold text-yellow-400 mb-5 tracking-wide">
          {treino.title}
        </h3>

        {/* Barra de progresso */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-neutral-400 mb-2">
            <span>
              {progress.completed}/{progress.total} concluídos
            </span>

            <span>
              {progress.percentage}%
            </span>
          </div>

          <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-yellow-400 transition-all duration-500 ease-out"
              style={{
                width: `${progress.percentage}%`,
              }}
            />
          </div>
        </div>

        {/* Exercícios */}
        <div className="space-y-3">
          {treino.exercises.map((ex, i) => {
            const exerciseId = `${treino.title}-${i}`;

            return (
              <label
                key={exerciseId}
                className="
                  flex items-center gap-3
                  rounded-lg
                  px-3 py-2
                  hover:bg-neutral-800/50
                  transition-all
                  cursor-pointer
                "
              >
                <input
                  type="checkbox"
                  checked={checkedItems[exerciseId] || false}
                  onChange={() => toggleExercise(exerciseId)}
                  className="h-5 w-5 accent-yellow-400"
                />

                <span
                  className={`text-lg transition-all ${
                    checkedItems[exerciseId]
                      ? "line-through text-neutral-500"
                      : "text-neutral-300"
                  }`}
                >
                  {ex}
                </span>
              </label>
            );
          })}
        </div>

        <p className="text-sm text-neutral-500 mt-5 italic">
          Foco: {treino.focus}
        </p>

      </CardContent>
    </Card>
  );
})}
>>>>>>> 5e8b4869f22c1566e7023569dd13b0f9454309b3
        </section>

        {/* CALL TO ACTION */}
        <section className="text-center mt-10">
          <p className="text-neutral-500 mb-4">Missão: tornar-se uma arma de combate.</p>
          <Button className="bg-amber-500 text-black font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-amber-400 transition-all">
            Treine com propósito ⚔️
          </Button>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto text-center text-neutral-600 mt-16 text-xs tracking-wide">
        Projeto Vigilante — Desenvolvido por Marçelo
      </footer>
    </div>
  );
}