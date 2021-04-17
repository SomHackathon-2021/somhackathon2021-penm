export default function Search() {
  return (
    <>
      <input type="text" placeholder="Buscar..." />

      <style jsx>{`
        input {
          width: 80%;
          height: 40px;
          background-color: white;
          display: flex;
          align-items: center;
          border-radius: 20px;
          display: grid;
          place-items: center;
          padding-left: 2em;
          border: none;
          outline: none;
        }
      `}</style>
    </>
  );
}
