<template>
  <div>
    <div ref="content">
      <h1>Teste PDF</h1>
      <br />
      <p>TESTE</p>
      <p>teste</p>
      <br />
      <img src="../assets/logo.png" />
      <br />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <v-btn @click="gerarPdf()">Gerar pdf</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({})
export default class Pdf extends Vue {
  private gerarPdf() {
    html2canvas(this.$refs.content as HTMLCanvasElement, { scale: 2 }).then(
      (canvas) => {
        const pdf = new jsPDF({
          unit: "px",
          format: "a4",
        });
        pdf.addImage(canvas.toDataURL("image/png"), "JPEG", 40, 15, 360, 0);
        pdf.save("PDF.pdf");
      }
    );
  }
}
</script>

<style scoped>
.size {
  font-size: 40px;
}
</style>