import Header from "./src/components/Header";
import CallBanner from "./src/components/CallBanner";
export default function Home() {
  return (
    <>
      <div className="max-w-full">
        <div className="main">
          <Header />
          <CallBanner />
        </div>
      </div>
    </>
  );
}
