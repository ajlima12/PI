Um dispositivo IoT que descreve roupas por voz, tornando lojas de moda acessíveis para pessoas com deficiência visual.


📌 Visão Geral
Solução IoT que:

🎯 Oferece descrições por voz de roupas em lojas

♿ Empodera pessoas com deficiência visual

🛒 Melhora a experiência de compra autônoma

📲 Pode ser integrado com apps e sistemas de loja

## **🛠 Tecnologias Principais**
<p align="left">
  <img src="https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge&logo=espressif&logoColor=white" alt="ESP32">
  <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="Linguagem C">
  <img src="https://img.shields.io/badge/Ultrasonic_Sensor-000000?style=for-the-badge" alt="Sensor HC-SR04">
  <img src="https://img.shields.io/badge/DFPlayer-FF0000?style=for-the-badge" alt="DFPlayer Mini">
</p>

**📊 Arquitetura do Sistema (Fluxo Vertical)**

<table align="center" style="border-collapse: collapse; color: white; font-family: Arial, sans-serif; background: #2d2d2d; padding: 15px; border-radius: 10px; width: 80%;">
  <!-- Cliente -->
  <tr>
    <td align="center" style="border: 2px solid #4CAF50; border-radius: 8px; padding: 12px; background: #1e1e1e;">
      <strong>🧑‍🦯 Cliente</strong><br>
      <em>Aproxima a mão da peça</em>
    </td>
  </tr>
  <tr><td align="center" style="padding: 8px;">↓</td></tr>
  
  <!-- Sensor -->
  <tr>
    <td align="center" style="border: 2px solid #2196F3; border-radius: 8px; padding: 12px; background: #1e1e1e;">
      <strong>📡 Sensor </strong><br>
      <em>Detecta proximidade (30cm)</em>
    </td>
  </tr>
  <tr><td align="center" style="padding: 8px;">↓</td></tr>
  
  <!-- Processador -->
  <tr>
    <td align="center" style="border: 2px solid #9C27B0; border-radius: 8px; padding: 12px; background: #1e1e1e;">
      <strong>💻 ESP32</strong><br>
      <em>Processa sinal e seleciona áudio</em>
    </td>
  </tr>
  <tr><td align="center" style="padding: 8px;">↓</td></tr>
  
  <!-- Áudio -->
  <tr>
    <td align="center" style="border: 2px solid #FF9800; border-radius: 8px; padding: 12px; background: #1e1e1e;">
      <strong>🔊 DFPlayer + SD Card</strong><br>
      <em>"Camiseta azul, algodão, tamanho M"</em>
    </td>
  </tr>
  <tr><td align="center" style="padding: 8px;">↓</td></tr>
  
  <!-- Saída -->
  <tr>
    <td align="center" style="border: 2px solid #F44336; border-radius: 8px; padding: 12px; background: #1e1e1e;">
      <strong>📢 Alto-falante</strong><br>
      <em>Reproduz descrição em voz alta</em>
    </td>
  </tr>
  <tr><td align="center" style="padding: 8px;">↓</td></tr>
  
  <!-- Feedback -->
  <tr>
    <td align="center" style="border: 2px solid #4CAF50; border-radius: 8px; padding: 12px; background: #1e1e1e;">
      <strong>👂 Cliente</strong><br>
      <em>Escuta a descrição da peça</em>
    </td>
  </tr>
</table>
