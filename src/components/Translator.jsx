import React, { useState, useEffect } from "react";
import Select from "react-select";

/*
  This example uses the MyMemory Translation API (Free - No API Key Required!)
  https://mymemory.translated.net/

  Request Format:
  GET https://api.mymemory.translated.net/get?q=text_to_translate&langpair=source_code|target_code

  Example:
  GET https://api.mymemory.translated.net/get?q=hello&langpair=en|es
*/

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
  { value: "ja", label: "Japanese" },
  { value: "zh-CN", label: "Chinese (Simplified)" },
  { value: "ko", label: "Korean" },
  { value: "ar", label: "Arabic" },
  { value: "hi", label: "Hindi" },
  { value: "te", label: "Telugu" },
];

export default function Translator() {
  const [sourceLang, setSourceLang] = useState(LANGUAGES[0]);
  const [targetLang, setTargetLang] = useState(LANGUAGES[1]);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    setError("");
    setResult("");
    if (!text.trim()) {
      setError("Please enter text to translate.");
      return;
    }

    setLoading(true);
    try {
      // Use MyMemory Translation API (Free, No API Key Required)
      const langPair = `${sourceLang.value}|${targetLang.value}`;
      const encodedText = encodeURIComponent(text);
      
      const url = `https://api.mymemory.translated.net/get?q=${encodedText}&langpair=${langPair}`;

      const res = await fetch(url);

      if (!res.ok) {
        setError(`❌ Network Error: Failed to connect to translation service`);
        setLoading(false);
        return;
      }

      const data = await res.json();

      // MyMemory API response format: { responseStatus: 200, responseData: { translatedText: "..." } }
      if (data?.responseStatus === 200 && data?.responseData?.translatedText) {
        const translated = data.responseData.translatedText;
        
        // Check if translation actually happened (MyMemory returns original text if no translation found)
        if (translated.toLowerCase() === text.toLowerCase()) {
          setError("⚠️ No translation available for this language pair. Try a different combination.");
        } else {
          setResult(translated);
        }
      } else if (data?.responseStatus === 403) {
        setError("❌ Translation Service: Daily limit reached. Try again tomorrow.");
      } else {
        setError(`❌ Translation Error: ${data?.responseDetails || "Unable to translate text"}`);
        console.error("API Response:", data);
      }
    } catch (err) {
      console.error("Translation error:", err);
      setError(`❌ Network Error: ${err.message || "Translation failed. Check your internet connection."}`);
    } finally {
      setLoading(false);
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(result);
    setResult("");
  };

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm">
        ✨ Using <strong>MyMemory Free Translation API</strong> - No API key required!
      </div>

      {/* Language Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">From Language</label>
          <Select
            options={LANGUAGES}
            value={sourceLang}
            onChange={(v) => setSourceLang(v)}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.5rem",
                borderColor: "#d1d5db",
                "&:hover": { borderColor: "#9ca3af" }
              })
            }}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">To Language</label>
          <Select
            options={LANGUAGES}
            value={targetLang}
            onChange={(v) => setTargetLang(v)}
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: "0.5rem",
                borderColor: "#d1d5db",
                "&:hover": { borderColor: "#9ca3af" }
              })
            }}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Text to translate</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={5}
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Type or paste text here..."
        />
        <p className="text-xs text-gray-500 mt-1">{text.length} characters</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleTranslate}
          className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors font-medium"
          disabled={loading || !text.trim()}
        >
          {loading ? "🔄 Translating..." : "✨ Translate"}
        </button>

        <button
          onClick={swapLanguages}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
          type="button"
          title="Swap source and target languages"
        >
          🔄 Swap
        </button>

        <button
          onClick={() => { setText(""); setResult(""); setError(""); }}
          className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors text-red-700"
          type="button"
          title="Clear all fields"
        >
          🗑️ Clear
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Translated</label>
        <div className="min-h-[150px] border border-gray-300 rounded-md p-4 bg-gradient-to-br from-gray-50 to-gray-100">
          {result ? (
            <p className="text-gray-800 whitespace-pre-wrap break-words">{result}</p>
          ) : (
            <span className="text-gray-400 italic">Translation will appear here...</span>
          )}
        </div>
        {result && (
          <button
            onClick={() => {
              navigator.clipboard.writeText(result);
              alert("✅ Copied to clipboard!");
            }}
            className="mt-2 px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
          >
            📋 Copy to Clipboard
          </button>
        )}
      </div>
    </div>
  );
}
