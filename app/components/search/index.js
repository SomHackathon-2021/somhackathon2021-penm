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
          box-shadow: 0px 0px 5px 0px rgba(61, 61, 61, 1);
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
