import { useEffect, useState } from "react";

export default function FlashCard({
  title = "Título do card",
  description = "Descrição do card, que pode conter mais palavras que o título",
  showFlashCardTitle = true,
}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  const fontSizeClassName = showTitle ? "text-xl" : "text-sm";

  function handleCardClick() {
    setShowTitle((currentShowTitle) => !currentShowTitle);
  }

  return (
    <div
      className={`shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
                  flex flex-row items-center justify-center
                  font-semibold ${fontSizeClassName}`}
      style={{ fontFamily: "'JetBrains Mono', 'monospace', 'Courier New'" }}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  );
}
