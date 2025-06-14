import { useState, useEffect } from 'react';
import { transliterate } from './translit';
import './index.css';
import copyIcon from './assets/copy.svg';




function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [direction, setDirection] = useState('enToUk');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const result = transliterate(inputText, direction);
    setOutputText(result);
  }, [inputText, direction]);

  const toggleDirection = () => {
    setDirection((prev) => (prev === 'enToUk' ? 'ukToEn' : 'enToUk'));
    setInputText(outputText);
    setOutputText(inputText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Transliterator</h1>
      </header>

      <main className="app-main">
        <div className="language-labels">
          <span>{direction === 'enToUk' ? 'Англійська' : 'Українська'}</span>
          <button className="toggle-button" onClick={toggleDirection}>⇄</button>
          <span>{direction === 'enToUk' ? 'Українська' : 'Англійська'}</span>
        </div>

        <div className="textareas">
          <textarea
            placeholder="Введіть текст..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="output-wrapper">
            <textarea
              placeholder="Виправлений текст..."
              value={outputText}
              readOnly
            />
<button className="copy-button" onClick={handleCopy} title="Копіювати">
  <img src={copyIcon} alt="Copy" style={{ width: '20px', height: '20px' }} />
</button>


            {copied && <span className="copied-label">Скопійовано!</span>}
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2025 Transliterator. Усі права захищено.</p>
      </footer>
    </div>
  );
}

export default App;
