pip install googletrans==4.0.0-rc1
from googletrans import Translator

def translate_hindi_to_other_indian_languages(text, target_languages):
    translator = Translator()
    translations = {}

    for lang in target_languages:
        translated_text = translator.translate(text, src='hi', dest=lang).text
        translations[lang] = translated_text

    return translations

# Example usage:
hindi_text = "नमस्ते, कैसे हो?"
indian_languages = ['bn', 'ta', 'mr','gu','hi','kn','ml','ne','pa','sd','te','ur']  # bn = Bengali, ta = Tamil, mr = Marathi

translations = translate_hindi_to_other_indian_languages(hindi_text, indian_languages)

for lang, translation in translations.items():
    print(f"{lang}: {translation}")
