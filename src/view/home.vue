<script setup>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import dashboard from "../module/gatewaychannel/dashboard/view/dashboard.vue";
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <dashboard></dashboard>
    </SectionMain>
  </LayoutAuthenticated>
</template>
