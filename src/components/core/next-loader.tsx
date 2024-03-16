import NextTopLoader from "nextjs-toploader";

export const NextLoaderComponent = () => {
  return (
    <>
      <NextTopLoader
        color="#1e40af"
        initialPosition={0.08}
        crawlSpeed={200}
        height={2}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={300}
        shadow="0 0 10px #1e40af,0 0 5px #1e40af"
        template='<div class="bar" role="bar"><div class="peg"></div></div>
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
    </>
  );
};
