// Função para validar e enviar o formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio real do formulário

    // Obtém os valores dos campos e usa .trim() para evitar espaços extras
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Verifica se os campos estão vazios
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos!");  // Se algum campo estiver vazio
    } else {
        // Exibe a mensagem de sucesso
        document.getElementById("successMessage").style.display = "block";

        // Limpa o formulário após o envio
        document.getElementById("contactForm").reset();
    }
});

// Efeito de foco nos campos de entrada
document.querySelectorAll('input, textarea').forEach(element => {
    element.addEventListener('focus', () => {
        element.style.borderColor = '#4CAF50'; // Cor da borda ao clicar
    });

    element.addEventListener('blur', () => {
        element.style.borderColor = '#ccc'; // Cor da borda quando perde o foco
    });
});
