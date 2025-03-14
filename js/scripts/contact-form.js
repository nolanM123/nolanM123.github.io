export function initContactForm() {
    $("#contact-form").on("submit", function(event) {
        event.preventDefault();
        
        const email = $("#contact-from").val();
        const content = $("#contact-content").val();

        const subject = encodeURIComponent("Portfolio Inquiry");
        const body = encodeURIComponent(content + "\n\nFrom: " + email);

        const mailtoLink = `mailto:nolan.m.mcallister@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });
}