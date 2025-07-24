document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("chatForm");

   form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      console.log("Dados enviados:", data);

      try {
         const response = await fetch("/message", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
               "Content-Type": "application/json"
            }
         });

         if (!response.ok) {
            alert("Error by sending the message");
            return;
         }

         form.reset();

      } catch (err) {
         alert("requisition error");
         console.error(err);
      }
   });
});