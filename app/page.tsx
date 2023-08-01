/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <div data-test="test">test</div>
      <style>{`[data-test="test"] { background: red; }`}</style>
    </div>
  );
}
