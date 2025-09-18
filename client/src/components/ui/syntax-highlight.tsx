import { useEffect, useRef } from "react";

interface SyntaxHighlightProps {
  code: string;
  language?: string;
  className?: string;
}

export function SyntaxHighlight({ code, language = "bash", className = "" }: SyntaxHighlightProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple syntax highlighting for bash commands
    if (codeRef.current && language === "bash") {
      const element = codeRef.current;
      const lines = code.split('\n');
      
      element.innerHTML = lines.map(line => {
        if (line.startsWith('$')) {
          const parts = line.split(' ');
          const prompt = `<span class="text-accent">${parts[0]}</span>`;
          const command = parts.slice(1).join(' ');
          return `${prompt} <span class="text-foreground">${command}</span>`;
        } else if (line.startsWith('✓')) {
          return `<span class="text-muted-foreground">${line}</span>`;
        }
        return `<span class="text-foreground">${line}</span>`;
      }).join('\n');
    }
  }, [code, language]);

  return (
    <code 
      ref={codeRef}
      className={`code-block text-sm whitespace-pre-wrap ${className}`}
      data-testid="syntax-highlight"
    >
      {code}
    </code>
  );
}
