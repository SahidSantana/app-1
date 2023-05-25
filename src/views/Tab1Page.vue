<template v-if = "name">
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Desarrollo de Aplicaciones Moviles</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <h2>Creando aplicaciones con ionic:)</h2>
      <p>Introduzca su nombre:</p>
      <input type ="text" class="form-control">
      <p>Introduzca su apellido paterno:</p>
      <input type ="text" class="form-control">
      <p>Introduzca su apellido materno:</p>
      <input type ="text" class="form-control">
      <hr>
      <p>
        <ion-button size="small" color="success" v-on:click="btnSig">
          Siguiente</ion-button>
      </p>
      <ExploreContainer name="Actividad" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
</script>

