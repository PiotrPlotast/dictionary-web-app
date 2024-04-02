import NewWindowImg from "./assets/images/icon-new-window.svg";

type WordExplanationProps = {
  word: {
    meanings: {
      partOfSpeech: string;
      definitions: {
        definition: string;
        example?: string;
      }[];
      synonyms?: string[];
      antonyms?: string[];
    }[];
    sourceUrls?: string[];
  }[];
  setSearchedWord: (word: string) => void;
  font: string;
};

export default function WordExplanation({
  word,
  setSearchedWord,
  font,
}: WordExplanationProps) {
  return (
    <div>
      {word[0]?.meanings.map((meaning, index) => {
        return (
          <div key={index} className="mt-6">
            <div className="flex items-center mb-8">
              <h2
                className={`text-textColor dark:text-darkThemeTextColor text-bodyM font-bold italic font-${font} md:text-headingM`}
              >
                {meaning.partOfSpeech}
              </h2>
              <div className="ml-4 h-[1px] w-full bg-decorationColor"></div>
            </div>
            <h3 className={`text-accentColor  font-${font} md:text-headingS`}>
              Meaning
            </h3>
            <ul className="mt-4 mb-6 list-disc px-4 marker:text-secondaryColor flex flex-col gap-3">
              {meaning.definitions.map((definition, index) => {
                return (
                  <li
                    key={index}
                    className={`text-[0.94rem] dark:text-darkThemeTextColor font-${font} md:text-bodyM`}
                  >
                    <p className={`dark:text-darkThemeTextColor font-${font}`}>
                      {definition.definition}
                    </p>
                    {definition.example && (
                      <p
                        className={` text-accentColor dark:text-darkThemeTextColor text-[0.94rem] mt-[0.875rem] font-${font} md:text-bodyM`}
                      >
                        "{definition.example}"
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <p className={` text-bodyM font-${font} md:text-headingS`}>
                <span className={`dark:text-accentColor mr-6 font-${font}`}>
                  Synonyms{" "}
                </span>
                {meaning.synonyms?.map((synonym, index) => {
                  return (
                    <span
                      key={index}
                      className={`text-secondaryColor font-bold hover:cursor-pointer hover:underline font-${font}`}
                      onClick={() => setSearchedWord(synonym)}
                    >
                      {synonym}
                      {index < (meaning.synonyms?.length ?? 0) - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>
            )}
            {meaning.antonyms && meaning.antonyms.length > 0 && (
              <p
                className={`dark:text-accentColor text-bodyM font-${font} md:text-headingS`}
              >
                <span className={`mr-6 font-${font}`}>Antonyms </span>
                {meaning.antonyms?.map((synonym, index) => {
                  return (
                    <span
                      key={index}
                      className={`text-secondaryColor font-bold hover:cursor-pointer hover:underline font-${font}`}
                      onClick={() => setSearchedWord(synonym)}
                    >
                      {synonym}
                      {index < (meaning.antonyms?.length ?? 0) - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>
            )}
          </div>
        );
      })}
      <div className=" h-[1px] w-full bg-decorationColor mt-8 mb-6"></div>
      <div className="pb-20 md:flex md:space-x-6">
        <h3
          className={`underline text-bodyS dark:text-darkThemeTextColor font-${font}`}
        >
          Source
        </h3>
        {word[0].sourceUrls && word[0].sourceUrls[0] && (
          <a
            className={`underline cursor-pointer text-bodyS flex items-center gap-2 dark:text-darkThemeTextColor font-${font}`}
            href={word[0].sourceUrls[0]}
          >
            <span>{word[0].sourceUrls[0]}</span>
            <span>
              <img src={NewWindowImg} alt="" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
