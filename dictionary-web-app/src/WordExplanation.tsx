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
            <ul className="mt-4 list-disc px-4 marker:text-secondaryColor">
              {meaning.definitions.map((definition, index) => {
                return (
                  <li key={index} className="text-bodyM">
                    {definition.definition}
                    {definition.example && (
                      <p className="text-secondaryColor text-bodyM">
                        <span className="font-bold">Example: </span>
                        {definition.example}
                      </p>
                    )}
                    {definition.synonyms && definition.synonyms.length > 0 && (
                      <p className="text-secondaryColor text-bodyM">
                        <span className="font-bold">Synonyms: </span>
                        {definition.synonyms.join(", ")}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
