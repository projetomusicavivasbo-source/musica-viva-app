import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './index.css';

// Estilo dos botões do menu superior - AJUSTADO PARA GRID
const navBtnStyle = (ativo) => ({
  width: '100%',
  padding: '10px 2px',
  backgroundColor: ativo ? '#28a745' : '#444',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '13px'
});

// Componente de Navegação Inferior (Anterior / Próxima)
function Navegacao({ atual, setAula, registrar, nomeAula }) {
  return (
    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', paddingBottom: '40px' }}>
      
      <button 
        onClick={() => registrar(nomeAula)} 
        style={{ padding: '15px 30px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', width: '90%', cursor: 'pointer' }}
      >
        CONCLUÍ A AULA {atual.toString().padStart(2, '0')} ✅
      </button>

      <div style={{ display: 'flex', gap: '10px', width: '90%' }}>
        {atual > 1 && (
          <button 
            onClick={() => { setAula(atual - 1); window.scrollTo(0,0); }}
            style={{ flex: 1, padding: '12px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            ⬅️ Anterior
          </button>
        )}

        {atual < 20 && (
          <button 
            onClick={() => { setAula(atual + 1); window.scrollTo(0,0); }}
            style={{ flex: 1, padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            Próxima ➡️
          </button>
        )}
      </div>
    </div>
  );
}

function App() {
  const [aulaAtual, setAulaAtual] = useState(1);

  const registrarAcesso = async (nomeAula) => {
    try {
      await addDoc(collection(db, "stats_musica_viva"), {
        aula: nomeAula,
        data: serverTimestamp(),
        origem: "portal_aluno"
      });
      alert(`Progresso salvo! Os professores já conseguem ver seu avanço na ${nomeAula}.`);
    } catch (e) {
      console.error("Erro ao salvar: ", e);
    }
  };

  useEffect(() => {
    const registrarAcessoGeral = async () => {
      try {
        await addDoc(collection(db, "estatisticas_gerais"), {
          projeto: "Musica Viva",
          data: serverTimestamp(),
          plataforma: "Web App",
          origem: "Acesso Inicial"
        });
      } catch (error) {
        console.error("Erro ao registrar acesso inicial:", error);
      }
    };
    registrarAcessoGeral();
  }, []);

  return (
    <div className="container" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', color: '#fff' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src="/logo.png" alt="Música Viva" style={{ width: '150px' }} />
        <h1>Portal Música Viva</h1>
        
        <nav style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '8px', 
          marginTop: '20px',
          maxWidth: '500px',
          margin: '20px auto'
        }}>
           {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
             <button 
               key={num} 
               onClick={() => { setAulaAtual(num); window.scrollTo(0,0); }} 
               style={navBtnStyle(aulaAtual === num)}
             >
               Aula {num}
             </button>
           ))}
        </nav>
      </header>

      <hr style={{ borderColor: '#444', marginBottom: '30px' }} />

      {aulaAtual === 1 && <Aula01 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 2 && <Aula02 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 3 && <Aula03 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 4 && <Aula04 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 5 && <Aula05 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 6 && <Aula06 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 7 && <Aula07 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 8 && <Aula08 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 9 && <Aula09 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 10 && <Aula10 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 11 && <Aula11 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 12 && <Aula12 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 13 && <Aula13 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 14 && <Aula14 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 15 && <Aula15 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 16 && <Aula16 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 17 && <Aula17 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 18 && <Aula18 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 19 && <Aula19 registrar={registrarAcesso} setAula={setAulaAtual} />}
      {aulaAtual === 20 && <Aula20 registrar={registrarAcesso} setAula={setAulaAtual} />}
    </div>
  );
}

// --- AULAS PRESERVADAS INTEGRALMENTE ---

function Aula01({ registrar, setAula }) {
  return (
    <div>
      <section>
        <h2>1. O que é Música?</h2>
        <p>"É a arte de produzir som, tem como finalidade traduzir sentimentos e expressões." </p>
        <ul>
          <li><strong>Harmonia:</strong> Notas tocadas juntas (Acompanhamento). </li>
          <li><strong>Melodia:</strong> Notas tocadas uma após a outra (Solo ou Voz). </li>
          <li><strong>Ritmo:</strong> A ordem do tempo dos sons. </li>
        </ul>
      </section>

      <section>
        <h2>2. Propriedades do Som</h2>
        <p>Tudo o que impressiona nossa audição é som! </p>
        <ul>
          <li><strong>Altura:</strong> Grave, Médio ou Agudo. </li>
          <li><strong>Duração:</strong> O tempo que o som dura. </li>
          <li><strong>Intensidade:</strong> Som Fraco ou Forte. </li>
          <li><strong>Timbre:</strong> A "cor" do som. </li>
        </ul>
      </section>

      <section style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>3. Conhecendo o Instrumento</h2>
        <img src="/violao.png" alt="Partes do Violão" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />
        <div style={{ textAlign: 'left', marginTop: '15px' }}>
          <ul>
            <li><strong>Trastes:</strong> As divisões de metal no braço. </li>
            <li><strong>Casas:</strong> O espaço onde você aperta as cordas.</li>
            <li><strong>Tarraxas:</strong> Onde você afina o seu violão. </li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: '40px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', color: '#000' }}>
        <h2 style={{ color: '#000' }}>4. O Alfabeto da Música (Cifras)</h2>
        <table style={{ width: '100%', textAlign: 'center', color: '#000' }}>
          <thead>
            <tr style={{ backgroundColor: '#004085', color: 'white' }}>
              <th>Nota</th><th>Letra</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Lá</td><td><strong>A</strong></td></tr>
            <tr><td>Si</td><td><strong>B</strong></td></tr>
            <tr><td>Dó</td><td><strong>C</strong></td></tr>
            <tr><td>Ré</td><td><strong>D</strong></td></tr>
            <tr><td>Mi</td><td><strong>E</strong></td></tr>
            <tr><td>Fá</td><td><strong>F</strong></td></tr>
            <tr><td>Sol</td><td><strong>G</strong></td></tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>5. As Cordas do Violão</h2>
        <ol reversed style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>1ª Corda (E) - Mi (aguda) </li>
          <li>2ª Corda (B) - Si </li>
          <li>3ª Corda (G) - Sol </li>
          <li>4ª Corda (D) - Ré </li>
          <li>5ª Corda (A) - Lá </li>
          <li>6ª Corda (E) - Mi (grave) </li>
        </ol>
      </section>
      <Navegacao atual={1} setAula={setAula} registrar={registrar} nomeAula="Aula 01" />
    </div>
  );
}

function Aula02({ registrar, setAula }) {
  return (
    <div>
      <h2>Aula 02: Os Dedos das Mãos</h2>
      <img src="/maos.png" alt="Mãos" style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} />
      <div style={{textAlign:'left', marginTop:'20px'}}>
        <p><strong>Mão Esquerda:</strong> 1, 2, 3, 4 </p>
        <p><strong>Mão Direita:</strong> P, I, M, A </p>
      </div>
      <Navegacao atual={2} setAula={setAula} registrar={registrar} nomeAula="Aula 02" />
    </div>
  );
}

function Aula03({ registrar, setAula }) {
  return (
    <div>
      <h2>Aula 03: Solo Prático</h2>
      <div style={{ backgroundColor: '#004085', padding: '15px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <strong>📖 Como ler os números:</strong>
        <p>Não leia como "Trinta e dois". Leia como <strong>3 e 2</strong>.</p>
        <ul>
          <li>O primeiro número diz qual <strong>CORDA</strong> tocar.</li>
          <li>O segundo número diz em qual <strong>CASA</strong> apertar.</li>
          <li>Número terminado em <strong>0</strong> (ex: 10, 20, 30) = Corda Solta!</li>
        </ul>
      </div>
      <img src="/solo_pratico.png" alt="Solo" style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} />
      <p><em>Dica: No "Parabéns à Você", comece tocando a corda 3 solta duas vezes (30 30).</em></p>
      <Navegacao atual={3} setAula={setAula} registrar={registrar} nomeAula="Aula 03" />
    </div>
  );
}

function Aula04({ registrar, setAula }) {
  return (
    <div>
      <h2>Aula 04: Dedilhados e Acordes</h2>
      <section style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h3>Técnica de Dedilhado (Mão Direita)</h3>
        <p>No 1º Exercício da imagem: Toque o <strong>P</strong> (polegar), depois <strong>I</strong>, depois <strong>M</strong> e por fim o <strong>A</strong>.</p>
        <p>Mantenha a mão em formato de "concha" sobre as cordas.</p>
      </section>
      <img src="/dedilhado.png" alt="Dedilhados" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />
      <div style={{ backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '10px', marginTop: '20px', textAlign: 'left' }}>
        <strong>Dica para os Acordes (E, A, D):</strong>
        <p>Aperte as cordas com a <strong>ponta</strong> dos dedos para não abafar as cordas vizinhas. O som deve ser limpo e claro!</p>
      </div>
      <Navegacao atual={4} setAula={setAula} registrar={registrar} nomeAula="Aula 04" />
    </div>
  );
}

function Aula05({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 05: Ritmos e Batidas</h2>
      <section style={{ backgroundColor: '#004085', padding: '15px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <strong>🎸 Guia de Execução:</strong>
        <ul>
          <li><strong>P:</strong> Toque com o Polegar (descendo nas cordas grossas).</li>
          <li><strong>Seta para Baixo (↓):</strong> Bata com as unhas dos dedos indicador/médio para baixo.</li>
          <li><strong>Seta para Cima (↑):</strong> Puxe com a ponta do dedo indicador para cima.</li>
          <li><strong>X:</strong> Abafamento (toque nas cordas e pare o som com a palma da mão).</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center' }}>
        <img
          src="/ritmos.png"
          alt="Tabela de Ritmos"
          style={{ width: '100%', maxWidth: '500px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
        />
        <div style={{ marginTop: '20px', backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '10px', textAlign: 'left' }}>
          <h4>Dica Prática: Valsa</h4>
          <p>A Valsa é o ritmo mais simples para começar. É o famoso "UM - dois - três":</p>
          <p><strong>1.</strong> Polegar (P) | <strong>2.</strong> Baixo (↓) | <strong>3.</strong> Baixo (↓)</p>
        </div>
      </section>
      <Navegacao atual={5} setAula={setAula} registrar={registrar} nomeAula="Aula 05" />
    </div>
  );
}

function Aula06({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 06: Minha Primeira Música</h2>
      <section style={{ backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <strong>🎯 Desafio Prático:</strong>
        <p>Vamos tocar <em>"A Casa"</em> do Toquinho. Note que a letra indica exatamente o momento de trocar o acorde!</p>
        <ul>
          <li><strong>Ritmo:</strong> Valsa (P ↓ ↓) - UM, dois, três.</li>
          <li><strong>Tom:</strong> A (Lá Maior).</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center' }}>
        <img
          src="/a_casa.png"
          alt="Cifra da música A Casa"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
        />
        <div style={{ marginTop: '20px', borderLeft: '4px solid #007bff', padding: '15px', textAlign: 'left', backgroundColor: '#333' }}>
          <h4>💡 Dica para o Aluno:</h4>
          <p>O <strong>E7 (Mi com Sétima)</strong> é um acorde de preparação. Ele "pede" para voltar para o <strong>A (Lá Maior)</strong>. Treine a troca entre eles várias vezes antes de cantar.</p>
        </div>
      </section>
      <Navegacao atual={6} setAula={setAula} registrar={registrar} nomeAula="Aula 06" />
    </div>
  );
}

function Aula07({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 07: Escala Cromática e o Braço do Violão</h2>
      <section style={{ backgroundColor: '#004085', padding: '15px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <strong>🏁 A Regra dos Meios-Tons:</strong>
        <p>No violão, cada <strong>CASA</strong> representa <strong>MEIO TOM</strong> (ou semitom).</p>
        <ul>
          <li><strong>Sustenido (#):</strong> Anda 1 casa para frente (som mais agudo).</li>
          <li><strong>Bemol (b):</strong> Volta 1 casa para trás (som mais grave).</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center' }}>
        <img
          src="/cromatica.png"
          alt="Escala Cromática no Braço"
          style={{ width: '100%', maxWidth: '800px', borderRadius: '5px', backgroundColor: '#fff', padding: '10px' }}
        />
        <div style={{ backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '10px', marginTop: '20px', textAlign: 'left' }}>
          <h4>💡 Desafio Mascarenhas:</h4>
          <p>Olhe para a 5ª corda (Lá/A) na imagem. Se você apertar a 2ª casa dessa corda, que nota você terá?</p>
          <p><em>Resposta: Note que após o Lá vem o Lá# e depois o <strong>Si (B)</strong>.</em></p>
          <hr />
          <p><strong>Dica de Ouro:</strong> Percebeu que entre <strong>E (Mi)</strong> e <strong>F (Fá)</strong> não tem casa vazia? O mesmo vale para <strong>B (Si)</strong> e <strong>C (Dó)</strong>. Grave isso!</p>
        </div>
      </section>
      <Navegacao atual={7} setAula={setAula} registrar={registrar} nomeAula="Aula 07" />
    </div>
  );
}

function Aula08({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 08: Tons e Semitons (Escala de Dó)</h2>
      <section style={{ backgroundColor: '#ffffff', color: '#000', padding: '20px', borderRadius: '10px', marginBottom: '20px', textAlign: 'left' }}>
        <h3 style={{ color: '#000', marginTop: '0' }}>📏 A Régua Musical:</h3>
        <p>No violão, medimos a distância entre as notas assim:</p>
        <ul>
          <li><strong>Semitom (Meio Tom):</strong> Avance <strong>1 CASA</strong>.</li>
          <li><strong>Tom:</strong> Avance <strong>2 CASAS</strong>.</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center' }}>
        <img
          src="/escala_diatonica.png"
          alt="Escala Diatônica de Dó"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}
        />
        <div style={{ backgroundColor: '#444', padding: '15px', borderRadius: '10px', marginTop: '20px', textAlign: 'left' }}>
          <h4>💡 A Fórmula das Escalas Maiores:</h4>
          <p>Toda escala maior segue essa ordem de "pulos":</p>
          <p style={{ fontSize: '20px', textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>
            TOM - TOM - SEMITOM - TOM - TOM - TOM - SEMITOM
          </p>
          <p><small>Note na imagem: De <strong>MI para FÁ</strong> e de <strong>SI para DÓ</strong> o pulo é de apenas 1 casa (Semitom)!</small></p>
        </div>
      </section>
      <Navegacao atual={8} setAula={setAula} registrar={registrar} nomeAula="Aula 08" />
    </div>
  );
}

function Aula09({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 09: Como os Acordes são Formados (Tríades)</h2>
      <section style={{ backgroundColor: '#004085', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <strong>🧱 O que é uma Tríade?</strong>
        <p>Um acorde básico é formado por 3 notas da escala, chamadas de 1ª, 3ª e 5ª (Graus):</p>
        <ul>
          <li><strong>1º Grau (Fundamental):</strong> Dá o nome ao acorde. É a nota "pai".</li>
          <li><strong>3º Grau (Terça):</strong> É o "sentimento". Define se o acorde é <strong>Maior</strong> ou <strong>Menor</strong>.</li>
          <li><strong>5º Grau (Quinta):</strong> É a "base". Dá estabilidade e corpo ao som.</li>
        </ul>
        <hr style={{ opacity: '0.3', margin: '15px 0' }} />
        <strong>🌓 A diferença entre Maior e Menor:</strong>
        <p>A única diferença entre um acorde "alegre" e um "triste" está na <strong>Terça</strong>:</p>
        <ul>
          <li><strong>Acorde Maior:</strong> A Terça é natural (2 tons de distância). Som aberto e alegre.</li>
          <li><strong>Acorde Menor:</strong> A Terça desce meio tom (1 tom e meio de distância). Som melancólico.</li>
        </ul>
        <p style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '5px', fontSize: '14px' }}>
          <em>Exemplo prático: Se você está fazendo um <strong>Lá Maior (A)</strong> e quer o <strong>Lá Menor (Am)</strong>, você só precisa recuar o dedo que aperta a terça em uma casa!</em>
        </p>
      </section>
      <section style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
          <div>
            <img src="/triade_do.png" alt="Tríade de Dó Maior" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', backgroundColor: '#fff', padding: '10px' }} />
            <div style={{ backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '10px', marginTop: '10px', textAlign: 'left', maxWidth: '400px' }}>
              <h4>🔍 Analisando o Dó (C):</h4>
              <p>Usamos apenas as notas <strong>DÓ - MI - SOL</strong>. Repare que o MI é a nossa "terça"!</p>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Visualizando a mudança de Terça (A para Am):</h4>
            <img src="/A_Am.png" alt="Comparativo Lá Maior e Lá Menor" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', backgroundColor: '#fff', padding: '10px' }} />
          </div>
        </div>
      </section>
      <Navegacao atual={9} setAula={setAula} registrar={registrar} nomeAula="Aula 09" />
    </div>
  );
}

function Aula10({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 10: O Campo Harmônico (A Família dos Acordes)</h2>
      <section style={{ backgroundColor: '#444', color: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px', borderLeft: '5px solid #ffc107' }}>
        <h3 style={{ marginTop: '0', color: '#ffc107' }}>🔢 O que são os Graus?</h3>
        <p>Imagine uma escada com 7 degraus. Cada degrau é uma nota da escala e recebe um número romano:</p>
        <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', letterSpacing: '5px' }}>I - II - III - IV - V - VI - VII</p>
        <p><strong>Os Graus servem para:</strong></p>
        <ul>
          <li><strong>Identificar a função:</strong> O Grau I é sempre o "Dono da Casa" (Tom).</li>
          <li><strong>Facilitar a Transposição:</strong> Se você aprende que uma música usa os graus <strong>I - IV - V</strong>, você consegue tocá-la em qualquer tom, basta olhar na tabela qual nota ocupa cada degrau.</li>
        </ul>
        <p style={{ fontSize: '14px', fontStyle: 'italic' }}>
          💡 É como um time de futebol: não importa quem é o jogador, a função de "Goleiro" (Grau I) será sempre a mesma.
        </p>
      </section>
      <section style={{ backgroundColor: '#ffffff', color: '#000', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <h3 style={{ marginTop: '0', color: '#004085' }}>🏠 O que é o Campo Harmônico?</h3>
        <p>No <strong>Método Mascarenhas</strong>, entendemos que os acordes não aparecem por acaso. Eles pertencem a uma "família" que combina entre si através da escala.</p>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Graus I, IV e V:</strong> São os pilares da música (Sempre <strong>MAIORES</strong>). Transmitem alegria e estabilidade.</li>
          <li><strong>Graus IIm, IIIm e VIm:</strong> São os acordes de descanso (Sempre <strong>MENORES</strong>). Trazem uma sensação mais sentimental ou triste.</li>
          <li><strong>Grau VII (Ø):</strong> O "Primo Diferente" (Sempre <strong>MEIO-DIMINUTO</strong>).</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center' }}>
        <img src="/campo_harmonico.png" alt="Tabela de Campo Harmônico" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }} />
        <div style={{ marginTop: '20px', backgroundColor: '#e9ecef', color: '#000', padding: '15px', borderRadius: '10px', borderLeft: '5px solid #6f42c1', textAlign: 'left' }}>
          <h4 style={{ color: '#6f42c1', marginTop: '0' }}>👥 O Acorde Relativo (O VI Grau)</h4>
          <p>Toda família (Tom) tem um parente muito próximo chamado <strong>Relativo Menor</strong>. Ele é sempre o <strong>VI Grau</strong> da tabela.</p>
          <ul>
            <li>Se a música está em <strong>C (Dó)</strong>, o seu relativo é o <strong>Am (Lá m)</strong>.</li>
            <li>Eles combinam tanto que muitas vezes uma música começa em um e termina no outro!</li>
          </ul>
          <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px', marginTop: '10px', border: '1px solid #ced4da' }}>
            <strong>Dica de Ouro:</strong> Para achar o relativo, basta voltar <strong>1 Tom e Meio</strong> na escala (o que equivale a 3 casas no violão).
            <br />
            <div style={{ marginTop: '10px', fontSize: '15px', color: '#444', textAlign: 'center' }}>
              <strong>Dó</strong> → (meio tom) → <strong>Si</strong> → (um tom) → <strong>Lá</strong>
              <br />
              <small>(Total de 3 casas para trás no braço do violão)</small>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '30px', backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', borderLeft: '6px solid #dc3545', textAlign: 'left', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h4 style={{ color: '#dc3545', marginTop: '0' }}>⚠️ Desvendando o VII Grau (m7b5)</h4>
          <p>Aquele símbolo de um círculo cortado (<strong>Ø</strong>) que você vê na última coluna da tabela representa o acorde <strong>Meio-Diminuto</strong>.</p>
          <p><strong>Por que ele é diferente?</strong></p>
          <ul>
            <li>Enquanto os outros acordes menores têm a 5ª nota "perfeita", este tem a <strong>5ª nota abaixada (diminuída)</strong>.</li>
            <li>Ele cria uma **tensão muito forte**, como se a música estivesse fazendo uma pergunta que precisa de resposta.</li>
            <li><strong>Onde usamos?</strong> É muito comum em passagens de músicas Gospel, Jazz e Bossa Nova para preparar a entrada de um acorde menor (geralmente o IIIm ou o VIm).</li>
          </ul>
          <p><em>Exemplo: No Tom de Dó (C), o VII grau é o <strong>Si Meio-Diminuto (BØ)</strong>.</em></p>
        </div>
        <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'left', border: '1px solid #444' }}>
          <h4 style={{ color: '#28a745' }}>🎸 Exercício de Audição (Sem Pestanas!)</h4>
          <p>Tente tocar esta progressão no Tom de <strong>Sol (G)</strong>. É uma das sequências mais usadas no mundo:</p>
          <p style={{ fontSize: '22px', textAlign: 'center', fontWeight: 'bold', letterSpacing: '10px' }}>G - Em - C - D</p>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px', backgroundColor: '#fff', padding: '15px', borderRadius: '8px' }}>
            <div style={{ textAlign: 'center', color: '#000', margin: '10px' }}>
              <strong>G (Sol)</strong><br/><img src="/acorde_g.png" alt="Sol Maior" style={{ width: '100px' }} />
            </div>
            <div style={{ textAlign: 'center', color: '#000', margin: '10px' }}>
              <strong>Em (Mi m)</strong><br/><img src="/acorde_em.png" alt="Mi Menor" style={{ width: '100px' }} />
            </div>
            <div style={{ textAlign: 'center', color: '#000', margin: '10px' }}>
              <strong>C (Dó)</strong><br/><img src="/acorde_c.png" alt="Dó Maior" style={{ width: '100px' }} />
            </div>
            <div style={{ textAlign: 'center', color: '#000', margin: '10px' }}>
              <strong>D (Ré)</strong><br/><img src="/acorde_d.png" alt="Ré Maior" style={{ width: '100px' }} />
            </div>
          </div>
          <p style={{ marginTop: '15px', fontSize: '14px', fontStyle: 'italic', color: '#fff' }}>
            Note como o <strong>C (Dó)</strong> e o <strong>D (Ré)</strong> são os graus IV e V da linha do Sol na nossa tabela acima!
          </p>
        </div>
      </section>
      <Navegacao atual={10} setAula={setAula} registrar={registrar} nomeAula="Aula 10" />
    </div>
  );
}

function Aula11({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 11: O Dicionário de Acordes e a Sétima</h2>
      <section style={{ backgroundColor: '#004085', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '30px' }}>
        <h3 style={{ marginTop: '0', color: '#ffc107' }}>✨ O Segredo da 7ª Menor</h3>
        <p>Para entender a sétima, pense na oitava da nota principal e volte <strong>1 TOM</strong> (2 casas no violão).</p>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
          <ul style={{ margin: '0', paddingLeft: '20px' }}>
            <li><strong>Tríade Comum:</strong> 1º + 3º + 5º (Som estável).</li>
            <li><strong>Acorde com 7ª:</strong> 1º + 3º + 5º + <strong>7º Menor</strong> (Nota que está 1 tom abaixo da fundamental).</li>
          </ul>
        </div>
        <h4>💡 Exemplo Prático no Dó (C7):</h4>
        <p>Você pega as notas de Dó (<strong>C - E - G</strong>) e adiciona o <strong>Síb (Sétima menor)</strong>. No violão, isso geralmente é feito adicionando ou retirando um dedo para liberar essa nota que gera o "tempero" especial.</p>
        <p style={{ fontSize: '14px', fontStyle: 'italic', borderLeft: '3px solid #ffc107', paddingLeft: '10px' }}>
          A sétima menor cria um "conflito" sonoro que o nosso ouvido quer resolver voltando para a nota de descanso (Grau I). Por isso o G7 chama o C!
        </p>
      </section>
      <section style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div>
          <h3>1. Acordes Maiores (Os Pilares)</h3>
          <img src="/acordes_maiores.png" alt="Acordes Maiores" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />
        </div>
        <div>
          <h3>2. Acordes Menores (O Sentimento)</h3>
          <img src="/acordes_menores.png" alt="Acordes Menores" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />
        </div>
        <div>
          <h3>3. Acordes com Sétima (A Preparação)</h3>
          <img src="/acordes_setima.png" alt="Acordes com Sétima" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }} />
        </div>
      </section>
      <Navegacao atual={11} setAula={setAula} registrar={registrar} nomeAula="Aula 11" />
    </div>
  );
}

function Aula12({ registrar, setAula }) {
  const [musica, setMusica] = useState('pescador');
  const btnStyle = (ativo) => ({ padding: '10px 15px', backgroundColor: ativo ? '#28a745' : '#555', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' });
  const imgStyle = { width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)', backgroundColor: '#fff', padding: '10px' };
  const containerStyle = { backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 12: Repertório de Prática 🎸</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 20px auto' }}>Antes de encararmos as pestanas na teoria, vamos consolidar as trocas de acordes abertos e o ritmo Pop Rock com estes sucessos:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button onClick={() => setMusica('pescador')} style={btnStyle(musica === 'pescador')}>Pescador de Ilusões</button>
        <button onClick={() => setMusica('sol')} style={btnStyle(musica === 'sol')}>O Sol</button>
        <button onClick={() => setMusica('esperando')} style={btnStyle(musica === 'esperando')}>Esperando na Janela</button>
      </div>
      <section style={{ textAlign: 'center' }}>
        {musica === 'pescador' && <img src="/pescador.png" alt="Pescador de Ilusões" style={imgStyle} />}
        {musica === 'sol' && <img src="/o_sol.png" alt="O Sol" style={imgStyle} />}
        {musica === 'esperando' && <img src="/esperando.png" alt="Esperando na Janela" style={imgStyle} />}
        <div style={containerStyle}>
          <h4>💡 Dica Mascarenhas:</h4>
          {musica === 'esperando' ? (
            <p>O ritmo dessa música é o Pop Rock básico, mas tente tocar mais "leve" para combinar com a melodia. O desafio aqui é a troca entre <strong>D (Ré)</strong> e <strong>G (Sol)</strong>.</p>
          ) : (
            <p>Mantenha o <strong>RITMO</strong> constante. Se errar o acorde, não pare a mão direita! O ritmo é a fundação da música.</p>
          )}
        </div>
      </section>
      <Navegacao atual={12} setAula={setAula} registrar={registrar} nomeAula={`Aula 12 - ${musica}`} />
    </div>
  );
}

function Aula13({ registrar, setAula }) {
  const [segundos, setSegundos] = useState(120);
  const [ativo, setAtivo] = useState(false);
  const [descansando, setDescansando] = useState(false);

  useEffect(() => {
    let intervalo = null;
    if (ativo && segundos > 0) {
      intervalo = setInterval(() => setSegundos(s => s - 1), 1000);
    } else if (segundos === 0) {
      if (!descansando) {
        setDescansando(true);
        setSegundos(60);
      } else {
        setAtivo(false);
        setDescansando(false);
        setSegundos(120);
      }
    }
    return () => clearInterval(intervalo);
  }, [ativo, segundos, descansando]);

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 13: O Domínio da Pestana</h2>
      <section style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <p><strong>Dica Técnica:</strong> Use a lateral do dedo indicador e faça o efeito pinça com o polegar baixo.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
          <img src="/acorde_e.png" alt="E" style={{ width: '120px' }} />
          <span style={{ fontSize: '30px' }}>→</span>
          <img src="/acorde_f.png" alt="F" style={{ width: '120px' }} />
        </div>
      </section>
      <section style={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
        <h4>{descansando ? '💤 Descanso' : '🎧 Treino'}</h4>
        <div style={{ fontSize: '2rem', margin: '10px 0' }}>{Math.floor(segundos / 60)}:{(segundos % 60).toString().padStart(2, '0')}</div>
        <button onClick={() => setAtivo(!ativo)} style={{ padding: '10px 20px', cursor: 'pointer' }}>{ativo ? 'PAUSAR' : 'INICIAR'}</button>
      </section>
      <Navegacao atual={13} setAula={setAula} registrar={registrar} nomeAula="Aula 13" />
    </div>
  );
}

// --- COMPONENTES AUXILIARES PARA A AULA 14 (INSIRA ACIMA DA FUNCTION AULA14) ---

// Estilo comum para as tabelas e diagramas
const shapeContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  marginTop: '20px',
  backgroundColor: '#fff', // Fundo branco como na imagem original
  padding: '20px',
  borderRadius: '10px',
  color: '#000' // Texto preto para contrastar
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '10px',
  fontSize: '14px'
};

const thStyle = {
  backgroundColor: '#f2f2f2',
  padding: '8px',
  border: '1px solid #ddd',
  fontWeight: 'bold'
};

const tdStyle = {
  padding: '8px',
  border: '1px solid #ddd',
  textAlign: 'center'
};

// Componente que recria a visualização do Shape de E (Diagramas e Tabela)
function VisualizacaoShapeE() {
  return (
    <div style={shapeContainerStyle}>
      <h3 style={{color: '#000'}}>Visualização: Shape de E (Corda 6)</h3>
      
      {/* Container para os diagramas de acordes corretos */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* DIAGRAMAS SVG CORRETOS - GERADOS PROFISSIONALMENTE */}
        <img src="/acorde_E_correto.svg" alt="Diagrama E Maior" style={{width: '110px'}} />
        <img src="/acorde_F_pestana_correto.svg" alt="Diagrama Fá Maior Pestana" style={{width: '110px'}} />
        <img src="/acorde_G_pestana_correto.svg" alt="Diagrama Sol Maior Pestana" style={{width: '110px'}} />
        <img src="/acorde_A_pestana_correto.svg" alt="Diagrama Lá Maior Pestana" style={{width: '110px'}} />
      </div>

      {/* TABELA PEDAGÓGICA (MANTIDA IGUAL À IMAGEM ORIGINAL) */}
      <div style={{width: '100%', textAlign: 'left'}}>
        <strong>Tabela de Transposição (Corda 6)</strong>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Corda</th>
              <th style={thStyle}>Ação (Casa)</th>
              <th style={thStyle}>Nova Nota / Acorde</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>E (Mi)</td><td style={tdStyle}>Mover para Casa 1 (Pestana)</td><td style={tdStyle}><strong>F (Fá)</strong></td></tr>
            <tr><td style={tdStyle}>E (Mi)</td><td style={tdStyle}>Mover para Casa 3 (Pestana)</td><td style={tdStyle}><strong>G (Sol)</strong></td></tr>
            <tr><td style={tdStyle}>E (Mi)</td><td style={tdStyle}>Mover para Casa 5 (Pestana)</td><td style={tdStyle}><strong>A (Lá)</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Componente que recria a visualização do Shape de Am (Diagramas e Tabela)
function VisualizacaoShapeAm() {
  return (
    <div style={shapeContainerStyle}>
      <h3 style={{color: '#000'}}>Visualização: Shape de Am (Corda 5)</h3>
      
      {/* Container para os diagramas de acordes corretos */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* DIAGRAMAS SVG CORRETOS - GERADOS PROFISSIONALMENTE */}
        <img src="/acorde_Am_correto.svg" alt="Diagrama Lá Menor" style={{width: '110px'}} />
        <img src="/acorde_Bm_pestana_correto.svg" alt="Diagrama Si Menor Pestana" style={{width: '110px'}} />
        <img src="/acorde_Cm_pestana_correto.svg" alt="Diagrama Dó Menor Pestana" style={{width: '110px'}} />
        <img src="/acorde_Dm_pestana_correto.svg" alt="Diagrama Ré Menor Pestana" style={{width: '110px'}} />
      </div>

      {/* TABELA PEDAGÓGICA (MANTIDA IGUAL À IMAGEM ORIGINAL) */}
      <div style={{width: '100%', textAlign: 'left'}}>
        <strong>Tabela de Transposição (Corda 5)</strong>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Corda</th>
              <th style={thStyle}>Ação (Casa)</th>
              <th style={thStyle}>Nova Nota / Acorde</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>A (Lá)</td><td style={tdStyle}>Mover para Casa 2 (Pestana)</td><td style={tdStyle}><strong>Bm (Si m)</strong></td></tr>
            <tr><td style={tdStyle}>A (Lá)</td><td style={tdStyle}>Mover para Casa 3 (Pestana)</td><td style={tdStyle}><strong>Cm (Dó m)</strong></td></tr>
            <tr><td style={tdStyle}>A (Lá)</td><td style={tdStyle}>Mover para Casa 5 (Pestana)</td><td style={tdStyle}><strong>Dm (Ré m)</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


// --- FUNCTION AULA14 ATUALIZADA ---

function Aula14({ registrar, setAula }) {
  const [shapeAtivo, setShapeAtivo] = useState('E');
  const btnStyle = (ativo) => ({ padding: '10px 20px', backgroundColor: ativo ? '#ffc107' : '#555', color: ativo ? '#000' : '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' });

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 14: O Sistema de Formas (Shapes Móveis) 🗺️</h2>
      
      <section style={{ backgroundColor: '#004085', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '30px' }}>
        <strong>🚀 O Segredo dos Profissionais:</strong>
        <p>No <strong>Método Mascarenhas</strong>, você não decora centenas de desenhos. Você decora <strong>Formas Básicas</strong> e as "arrasta" pelo braço do violão.</p>
        <p>Sua mão esquerda agora é um molde que se move!</p>
      </section>

      <section style={{ backgroundColor: '#2e2e2e', padding: '15px', borderRadius: '10px', marginBottom: '20px', textAlign: 'center' }}>
        <p>Escolha o desenho (Shape) para entender a lógica:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button onClick={() => setShapeAtivo('E')} style={btnStyle(shapeAtivo === 'E')}>Shape de E (Corda 6)</button>
          <button onClick={() => setShapeAtivo('A')} style={btnStyle(shapeAtivo === 'A')}>Shape de Am/A (Corda 5)</button>
        </div>
      </section>

      {/* SEÇÃO DE VISUALIZAÇÃO - A IMAGEM UNICA FOI SUBSTITUÍDA PELOS COMPONENTES CORRETOS */}
      <section style={{ textAlign: 'center', marginBottom: '30px' }}>
        {/* Exibe dinamicamente o conteúdo correto e alinhado com base no botão clicado */}
        {shapeAtivo === 'E' ? <VisualizacaoShapeE /> : <VisualizacaoShapeAm />}

        <div style={{ backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
          <h4 style={{ color: '#004085', marginTop: '0' }}>🔍 Lógica Aplicada:</h4>
          {shapeAtivo === 'E' ? (
            <p>O desenho do <strong>Mi Maior (E)</strong> manda na 6ª corda. <br />Arraste esse desenho para a casa 1 e terá um <strong>Fá (F)</strong>. Arraste para a casa 3 e terá um <strong>Sol (G)</strong>!</p>
          ) : (
            <p>O desenho do <strong>Lá Menor (Am)</strong> manda na 5ª corda. <br />Arraste para a casa 2 e terá um <strong>Si menor (Bm)</strong>. Arraste para a casa 3 e terá um <strong>Dó menor (Cm)</strong>!</p>
          )}
        </div>
      </section>

      <Navegacao atual={14} setAula={setAula} registrar={registrar} nomeAula="Aula 14" />
    </div>
  );
}

function Aula15({ registrar, setAula }) {
  const [padrao, setPadrao] = useState('basico');
  const containerStyle = { backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 15: A Arte do Arpejo (Dedilhado) 🖐️</h2>
      <section style={{ backgroundColor: '#004085', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <h3 style={{ color: '#ffc107', marginTop: 0 }}>🎵 O que é Arpejar?</h3>
        <p>Arpejo vem da palavra italiana <em>'Arpa'</em> (Harpa). Significa tocar as notas de um acorde uma após a outra, em vez de todas de uma vez.</p>
        <p><strong>Como funciona:</strong> Enquanto sua mão esquerda monta o acorde, sua mão direita "desfia" as cordas seguindo uma ordem específica.</p>
      </section>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '10px' }}>
          <h4>🏷️ Lembrete PIMA (Aula 02):</h4>
          <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
            <li><strong>P (Polegar):</strong> Responsável pelo "Baixo" (cordas 6, 5 ou 4).</li>
            <li><strong>I (Indicador):</strong> Corda 3.</li>
            <li><strong>M (Médio):</strong> Corda 2.</li>
            <li><strong>A (Anelar):</strong> Corda 1.</li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '15px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
          <h4>💡 Regra de Ouro:</h4>
          <p>Mantenha o pulso relaxado e levemente arqueado. Os dedos I-M-A devem fazer um movimento de "puxar" para dentro da palma da mão.</p>
        </div>
      </div>
      <div style={containerStyle}>
        <h3>🎯 Pratique o Padrão Mascarenhas</h3>
        <p>Siga a ordem das notas abaixo no tempo do metrônomo:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <button onClick={() => setPadrao('basico')} style={{ padding: '10px', cursor: 'pointer', backgroundColor: padrao === 'basico' ? '#28a745' : '#ccc', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Padrão 1 (4 Notas)</button>
          <button onClick={() => setPadrao('vai-volta')} style={{ padding: '10px', cursor: 'pointer', backgroundColor: padrao === 'vai-volta' ? '#28a745' : '#ccc', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>Padrão 2 (6 Notas)</button>
        </div>
        <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#004085', border: '3px solid #004085', padding: '30px', borderRadius: '10px', backgroundColor: '#e9ecef' }}>
          {padrao === 'basico' ? 'P → I → M → A' : 'P → I → M → A → M → I'}
        </div>
        <p style={{ marginTop: '15px' }}>
          <strong>Dica:</strong> No acorde de <strong>Dó (C)</strong>, o Polegar toca a 5ª corda. <br/>No acorde de <strong>Sol (G)</strong>, o Polegar toca a 6ª corda.
        </p>
      </div>
      <Navegacao atual={15} setAula={setAula} registrar={registrar} nomeAula="Aula 15" />
    </div>
  );
}

function Aula16({ registrar, setAula }) {
  const [musica, setMusica] = useState('xote');
  const btnStyle = (ativo) => ({ padding: '10px 15px', backgroundColor: ativo ? '#28a745' : '#555', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' });
  const containerStyle = { backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
  const imgStyle = { width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', backgroundColor: '#fff', padding: '10px' };
  const alignmentStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', width: '100%', maxWidth: '600px', margin: '0 auto' };

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 16: O Desafio das Pestanas no Repertório 🎶</h2>
      <section style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px', borderLeft: '5px solid #ffc107' }}>
        <h4 style={{ color: '#ffc107', marginTop: 0 }}>🎯 Aplicação Prática:</h4>
        <p>Agora é hora de usar as pestanas em músicas reais! O segredo é ter paciência na troca entre o acorde aberto e a pestana.</p>
        <p><em>Dica: Use o cronômetro da Aula 13 para treinar as trocas entre (G e Bm) ou (C e Bb) antes de tocar a música inteira.</em></p>
      </section>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button onClick={() => setMusica('xote')} style={btnStyle(musica === 'xote')}>Xote dos Milagres (Bm)</button>
        <button onClick={() => setMusica('sera')} style={btnStyle(musica === 'sera')}>Será (F e Bb)</button>
      </div>
      <section style={{ textAlign: 'center' }}>
        {musica === 'xote' && <div><img src="/xote.png" alt="Xote dos Milagres" style={imgStyle} /></div>}
        {musica === 'sera' && (
          <div style={alignmentStyle}>
            <img src="/sera1.png" alt="Será Parte 1" style={{ ...imgStyle, borderRadius: '10px 10px 0 0', boxShadow: 'none' }} />
            <img src="/sera2.png" alt="Será Parte 2" style={{ ...imgStyle, borderRadius: '0', boxShadow: 'none' }} />
            <img src="/sera3.png" alt="Será Parte 3" style={{ ...imgStyle, borderRadius: '0 0 10px 10px' }} />
          </div>
        )}
        <div style={containerStyle}>
          <h4>💡 Dica Pedagógica CEPAT:</h4>
          {musica === 'xote' ? (
            <p>O <strong>Bm (Si menor)</strong> no xote exige precisão. No compasso do xote, o Bm dá o tom sentimental da música. Capriche no baixo da 5ª corda!</p>
          ) : (
            <p>Em "Será", o <strong>Bb (Si Bemol)</strong> é o grande desafio. Lembre-se: ele é o "Shape de A" na casa 1. Se o som "mascar" um pouco, não pare, mantenha a energia do Pop Rock!</p>
          )}
        </div>
      </section>
      <Navegacao atual={16} setAula={setAula} registrar={registrar} nomeAula={`Aula 16 - ${musica}`} />
    </div>
  );
}

function Aula17({ registrar, setAula }) {
  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 17: Transposição e o Capotraste 🛠️</h2>
      <section style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px', borderLeft: '5px solid #ffc107' }}>
        <h3 style={{ color: '#ffc107', marginTop: 0 }}>🧠 O que é Transpor?</h3>
        <p>Transpor é mudar a tonalidade de uma música (deixar mais aguda ou mais grave) para se ajustar à voz de quem canta, sem mudar a "alma" da música.</p>
        <p><strong>O Capotraste</strong> é o seu melhor amigo aqui: ele funciona como uma "pestana mecânica" que prende todas as cordas para você.</p>
      </section>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '10px', textAlign: 'left' }}>
          <h4>💡 A Lógica do "Escravo"</h4>
          <p>Quando você coloca o capotraste na <strong>2ª casa</strong> e faz o desenho de <strong>C (Dó)</strong>, o som que sai na verdade é um <strong>D (Ré)</strong>.</p>
          <p>Você usa a forma que já conhece, mas o acessório sobe o tom para você!</p>
        </div>
        <div style={{ backgroundColor: '#fff', color: '#000', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
          <h4>📏 Tabela de Consulta Rápida</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#eee' }}>
                <th style={{ padding: '5px', border: '1px solid #ccc' }}>Desenho</th>
                <th style={{ padding: '5px', border: '1px solid #ccc' }}>Capo na 2ª</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '5px', border: '1px solid #ccc' }}>C (Dó)</td><td style={{ padding: '5px', border: '1px solid #ccc' }}>D (Ré)</td></tr>
              <tr><td style={{ padding: '5px', border: '1px solid #ccc' }}>G (Sol)</td><td style={{ padding: '5px', border: '1px solid #ccc' }}>A (Lá)</td></tr>
              <tr><td style={{ padding: '5px', border: '1px solid #ccc' }}>D (Ré)</td><td style={{ padding: '5px', border: '1px solid #ccc' }}>E (Mi)</td></tr>
              <tr><td style={{ padding: '5px', border: '1px solid #ccc' }}>Am (Lá m)</td><td style={{ padding: '5px', border: '1px solid #ccc' }}>Bm (Si m)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <section style={{ textAlign: 'center' }}>
        <h4 style={{ color: '#ffc107' }}>📸 Onde colocar o Capo?</h4>
        <p>Use o mapa que aprendemos na <strong>Aula 14</strong>. Cada casa que você pula com o capotraste, você sobe meio tom na música inteira!</p>
        <img src="/mapa_shapes.png" alt="Mapa de Notas" style={{ width: '100%', maxWidth: '500px', borderRadius: '10px', opacity: '0.8' }} />
      </section>
      <Navegacao atual={17} setAula={setAula} registrar={registrar} nomeAula="Aula 17" />
    </div>
  );
}

function Aula18({ registrar, setAula }) {
  const containerStyle = { backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', marginTop: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'left' };

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 18: Iniciação ao "Tirar de Ouvido" 🎧</h2>
      <section style={{ backgroundColor: '#004085', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px' }}>
        <h3 style={{ color: '#ffc107', marginTop: 0 }}>👂 O Segredo da Gira Harmônica</h3>
        <p>Tirar música de ouvido no <strong>Método Mascarenhas</strong> não é mágica, é lógica! As músicas seguem caminhos previsíveis baseados no Campo Harmônico.</p>
      </section>
      <section style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h4>🗺️ O Mapa Mascarenhas das Funções</h4>
        <img src="/gira_harmonica.png" alt="Gira Harmônica Mascarenhas" style={{ width: '100%', maxWidth: '650px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', backgroundColor: '#fff', padding: '10px' }} />
        <div style={containerStyle}>
          <h4>🔍 Entendendo a "Gravidade" da Gira:</h4>
          <ul>
            <li><strong>🏠 Tônica (Azul):</strong> É o ponto de repouso e o destino final da música.</li>
            <li><strong>🛤️ Subdominante (Verde):</strong> É o afastamento suave. Prepara o caminho para a tensão.</li>
            <li><strong>⚡ Dominante (Vermelho):</strong> É a tensão máxima! A seta forte mostra que ele precisa resolver na Tônica.</li>
          </ul>
        </div>
      </section>
      <Navegacao atual={18} setAula={setAula} registrar={registrar} nomeAula="Aula 18" />
    </div>
  );
}

function Aula19({ registrar, setAula }) {
  const [musicaAtiva, setMusicaAtiva] = useState('chalana');
  const containerStyle = { backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', marginTop: '20px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' };
  const imgStyle = { width: '100%', maxWidth: '600px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', backgroundColor: '#fff', padding: '10px' };
  const alignmentStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0', width: '100%', maxWidth: '600px', margin: '0 auto' };
  const btnStyle = (ativo) => ({ padding: '10px 15px', backgroundColor: ativo ? '#28a745' : '#555', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' });

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 19: Dicionário de Ritmos e Repertório Final 🪕</h2>
      <section style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px', textAlign: 'left', marginBottom: '20px', borderLeft: '5px solid #ffc107' }}>
        <p>No <strong>Método Mascarenhas</strong>, o violonista completo domina o balanço da nossa terra. Vamos sair do Pop Rock e aprender a cadência da Guarânia, da Valsa e o "skank" do Reggae.</p>
      </section>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        <button onClick={() => setMusicaAtiva('chalana')} style={btnStyle(musicaAtiva === 'chalana')}>Chalana (Guarânia)</button>
        <button onClick={() => setMusicaAtiva('boate')} style={btnStyle(musicaAtiva === 'boate')}>Boate Azul (Valsa/Sertanejo)</button>
        <button onClick={() => setMusicaAtiva('anjo')} style={btnStyle(musicaAtiva === 'anjo')}>Anjo (Reggae)</button>
      </div>
      <section style={{ textAlign: 'center' }}>
        {musicaAtiva === 'chalana' && (
          <div style={containerStyle}>
            <h4>🎵 Guarânia: Chalana</h4>
            <p><strong>Dica Mascarenhas:</strong> Ritmo ternário (contado de 3 em 3). Conte: 1 (Polegar), 2, 3 (puxadas). É um ritmo mais lento e "chorado".</p>
            <img src="/chalana.png" alt="Cifra Chalana" style={imgStyle} />
          </div>
        )}
        {musicaAtiva === 'boate' && (
          <div style={containerStyle}>
            <h4>🎵 Valsa/Sertanejo Raiz: Boate Azul</h4>
            <p><strong>Dica Mascarenhas:</strong> Mais seco e marcado. Usamos o baixo do polegar alternado. O ritmo de valsa ternário é a base aqui.</p>
            <div style={alignmentStyle}>
              <img src="/boate_azul1.png" alt="Parte 1" style={{ ...imgStyle, borderRadius: '10px 10px 0 0', boxShadow: 'none' }} />
              <img src="/boate_azul2.png" alt="Parte 2" style={{ ...imgStyle, borderRadius: '0', boxShadow: 'none' }} />
              <img src="/boate_azul3.png" alt="Parte 3" style={{ ...imgStyle, borderRadius: '0 0 10px 10px' }} />
            </div>
          </div>
        )}
        {musicaAtiva === 'anjo' && (
          <div style={containerStyle}>
            <h4>🎵 Reggae: Anjo</h4>
            <p><strong>Dica Mascarenhas:</strong> O segredo é o "skank" no tempo fraco. Batida curta e abafada. Sinta o balanço e foque na precisão do tempo!</p>
            <img src="/anjo.png" alt="Cifra Anjo (Reggae)" style={imgStyle} />
          </div>
        )}
      </section>
      <Navegacao atual={19} setAula={setAula} registrar={registrar} nomeAula={`Aula 19 - ${musicaAtiva}`} />
    </div>
  );
}

function Aula20({ registrar, setAula }) {
  const containerStyle = { backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '15px', marginTop: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'left' };
  const chordBox = { display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', borderBottom: '1px solid #eee', flexWrap: 'wrap' };
  const imgStyle = { width: '120px', borderRadius: '8px' };

  return (
    <div className="aula-content">
      <h2 style={{ textAlign: 'center' }}>Aula 20: Colorindo o Som - Acordes Especiais 🎨</h2>
      <section style={{ backgroundColor: '#004085', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <strong>✅ Atenção aos Símbolos:</strong>
        <p><strong>❌ (X):</strong> Não toque a corda. | <strong>⭕ (O):</strong> Corda solta. | <strong>1, 2, 3, 4:</strong> Dedos da mão esquerda.</p>
      </section>
      <div style={containerStyle}>
        {/* C7M */}
        <div style={chordBox}>
          <img src="/C7M.png" alt="C7M" style={imgStyle} />
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#007bff', margin: '0 0 5px 0' }}>✨ C7M (Dó com Sétima Maior)</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>O som da paz. Note o <strong>X</strong> na 6ª corda: o polegar deve evitar o Mizão para o som ficar limpo. As cordas 3, 2 e 1 são soltas.</p>
          </div>
        </div>
        {/* Dsus4 */}
        <div style={chordBox}>
          <img src="/Dsus4.png" alt="Dsus4" style={imgStyle} />
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#28a745', margin: '0 0 5px 0' }}>⚡ Dsus4 (Ré Suspenso 4)</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>Som de expectativa. Você adiciona o dedo 4 na 3ª casa. O <strong>X</strong> nas cordas 6 e 5 indica que o baixo é na 4ª corda.</p>
          </div>
        </div>
        {/* C9 */}
        <div style={chordBox}>
          <img src="/C9.jpg" alt="C9" style={imgStyle} />
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#ffc107', margin: '0 0 5px 0' }}>🌟 C9 (Dó com Nona)</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>O som moderno. Aqui o <strong>X</strong> no Mizão é vital. Note que a 1ª corda (E) também não soa para destacar a nona (nota Ré).</p>
          </div>
        </div>
        {/* G/B */}
        <div style={chordBox}>
          <img src="/GB.png" alt="G/B" style={imgStyle} />
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#dc3545', margin: '0 0 5px 0' }}>🎸 G/B (Sol com Baixo em Si)</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>Usado para passagens. O dedo 1 faz o baixo na 5ª corda (nota Si). Evite tocar a 6ª corda.</p>
          </div>
        </div>
        {/* E/G# */}
        <div style={chordBox}>
          <img src="/EGsh.png" alt="E/G#" style={imgStyle} />
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#6f42c1', margin: '0 0 5px 0' }}>🎵 E/G# (Mi com Baixo em Sol#)</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>Um dos mais bonitos para condução. O dedo 2 faz o baixo na 6ª corda (4ª casa). Muita atenção aos <strong>X</strong> nas cordas 5 e 1.</p>
          </div>
        </div>
      </div>
      <Navegacao atual={20} setAula={setAula} registrar={registrar} nomeAula="Aula 20" />
    </div>
  );
}

export default App;