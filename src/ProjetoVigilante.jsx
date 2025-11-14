import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Activity } from "lucide-react";

export default function ProjetoVigilante() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-4 py-10 font-sans">
      {/* HEADER */}
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-yellow-400 tracking-tight drop-shadow-lg">
          🦇 Projeto Vigilante — Fase 1
        </h1>
        <p className="text-neutral-400 mt-4 text-lg">
          Powerbuilding + Muay Thai — treinos de até 60 minutos
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
                <p>• Descanso: <strong>60–90s</strong> principais / <strong>30–60s</strong> auxiliares.</p>
                <p>• Progressão: aumente a carga com forma perfeita.</p>
                <p>• Mobilidade: 5–10 min antes e após treinos.</p>
                <p>• Sono: 7–9h por noite.</p>
                <p>• Nutrição: proteína, carboidratos complexos, boas gorduras.</p>
              </div>
            </CardContent>
          </Card>

        </section>

        {/* TREINOS */}
        <section className="flex flex-col gap-10">
          {[

            {
              title: "🦇 Segunda — Sombras de Gotham",
              focus: "Potência de pernas e estabilidade para chutes.",
              exercises: [
                "Agachamento livre — 4x8",
                "Levantamento terra romeno — 4x6",
                "Leg press 45° — 3x10",
                "Panturrilha em pé — 4x12",
                "Prancha isométrica — 3x até a falha",
              ],
            },

            {
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
              ],
            },

            {
              title: "🦾 Quarta — Ascensão do Vigilante",
              focus: "Estabilidade e resistência de tronco.",
              exercises: [
                "Agachamento hack — 4x10",
                "Stiff halteres — 3x10",
                "Extensora — 3x12",
                "Flexora — 3x12",
                "Panturrilha sentado — 4x15",
                "Abdominal máquina — 3x15",
              ],
            },

            {
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
              ],
            },

            {
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