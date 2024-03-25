export default function wordExplanation({ word }) {
  <div>
    {word[0]?.meanings.map((meaning, index) => {
      return (
        <div key={index} className="mt-6">
          <h2 className="text-textColor text-[1.5rem] font-bold">
            {meaning.partOfSpeech}
          </h2>
          {meaning.definitions.map((definition, index) => {
            return (
              <div key={index} className="mt-4">
                <p className="text-secondaryColor text-bodyM">
                  {definition.definition}
                </p>
                {definition.example && (
                  <p className="text-secondaryColor text-bodyM">
                    <span className="font-bold">Example: </span>
                    {definition.example}
                  </p>
                )}
                {definition.synonyms && (
                  <p className="text-secondaryColor text-bodyM">
                    <span className="font-bold">Synonyms: </span>
                    {definition.synonyms.join(", ")}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      );
    }, [])}
  </div>;
}
