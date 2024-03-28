import NewWindowImg from "./assets/images/icon-new-window.svg";

export default function WordExplanation({ word }) {
  return (
    <div>
      {word[0]?.meanings.map((meaning, index) => {
        return (
          <div key={index} className="mt-6">
            <div className="flex items-center mb-8">
              <h2 className="text-textColor text-bodyM font-bold italic">
                {meaning.partOfSpeech}
              </h2>
              <div className="ml-4 h-[1px] w-full bg-decorationColor"></div>
            </div>
            <h3 className="text-accentColor">Meaning</h3>
            <ul className="mt-4 list-disc px-4 marker:text-secondaryColor flex flex-col gap-3">
              {meaning.definitions.map((definition, index) => {
                return (
                  <>
                    <li key={index} className="text-[0.94rem]">
                      <p>{definition.definition}</p>
                      {definition.example && (
                        <p className=" text-accentColor text-[0.94rem]">
                          "{definition.example}"
                        </p>
                      )}
                      {definition.synonyms &&
                        definition.synonyms.length > 0 && (
                          <p className="text-secondaryColor text-bodyM">
                            <span className="font-bold">Synonyms: </span>
                            {definition.synonyms}
                          </p>
                        )}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className=" h-[1px] w-full bg-decorationColor mt-8 mb-6"></div>
      <div className=" mb-20">
        <h3 className="underline text-bodyS">Source</h3>
        <a
          className="underline cursor-pointer text-bodyS flex items-center gap-2"
          href={word[0].sourceUrls[0]}
        >
          <span>{word[0].sourceUrls[0]}</span>
          <span>
            <img src={NewWindowImg} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
}
