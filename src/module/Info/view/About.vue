<script setup>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import SectionMain from "@/components/SectionMain.vue";

import { useMainStore } from "@/stores/main.js";

import { mdiInformationOutline } from "@mdi/js";

const mainStore = useMainStore();
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiInformationOutline"
        title="About"
        main
      >
      </SectionTitleLineWithButton>
      <div class="mb-5">
        <el-link type="primary" disabled>Information</el-link>
        <el-descriptions class="mt-3" :column="2" :size="size" border>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <user />
                </el-icon>
                Name
              </div>
            </template>
            {{ mainStore.gatewayInfo.name }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <iphone />
                </el-icon>
                Type
              </div>
            </template>
            {{ mainStore.gatewayInfo.type }}
          </el-descriptions-item>

          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                Version
              </div>
            </template>
            {{ mainStore.gatewayInfo.version }}
          </el-descriptions-item>
          <el-descriptions-item align="center">
            <template #label>
              <div class="cell-item">
                <el-icon :style="iconStyle">
                  <office-building />
                </el-icon>
                Web Version
              </div>
            </template>
            20250320_DEV
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </SectionMain></LayoutAuthenticated
  >
</template>
