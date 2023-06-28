<script setup>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBox from "@/components/CardBox.vue";
import GatewayInfoView from "../components/GatewayInfoView.vue";

import { mdiLinkVariantPlus } from "@mdi/js";

</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiLinkVariantPlus"
        title="System Config"
        main
      >
      </SectionTitleLineWithButton>
      <CardBox>
        <GatewayInfoView></GatewayInfoView>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
