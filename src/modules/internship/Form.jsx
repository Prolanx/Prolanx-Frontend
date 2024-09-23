import { useEffect } from "react";

const Form = ({ url }) => {
  // The code below will load the embed
  useEffect(() => {
    const widgetScriptSrc = "https://tally.so/widgets/embed.js";

    const load = () => {
      // Load Tally embeds
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
        return;
      }

      // Fallback if window.Tally is not available
      document
        .querySelectorAll("iframe[data-tally-src]:not([src])")
        .forEach((iframeEl) => {
          iframeEl.src = iframeEl.dataset.tallySrc;
        });
    };

    // If Tally is already loaded, load the embeds
    if (typeof Tally !== "undefined") {
      load();
      return;
    }

    // If the Tally widget script is not loaded yet, load it
    if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
      const script = document.createElement("script");
      script.src = widgetScriptSrc;
      script.onload = load;
      script.onerror = load;
      document.body.appendChild(script);
      return;
    }

    // // Event listener for form submission
    // const handleMessage = (e) => {
    //   if (e?.data?.includes("Tally.FormSubmitted")) {
    //     console.log("e", e.data)
    //     const payload = JSON.parse(e.data).payload;
    //     console.log("Form submitted!", payload);
    //     console.log("submissionId ", payload?.submissionId)
       
    //     // Add your form submission logic here, e.g., updating state or triggering an API call
    //   }
    // };
    // window.addEventListener("message", handleMessage);
    // return () => {
    //   window.removeEventListener("message", handleMessage);
    // };
  }, []);

  return (
    <div>
      <iframe
        data-tally-src={url}
        loading="lazy"
        width="100%"
        height="216"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Newsletter subscribers"
      ></iframe>
    </div>
  );
};

export default Form;
