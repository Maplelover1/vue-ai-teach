<script lang="ts" setup>
import {
  ArrowDown,
  HelpFilled,
  Connection,
  MagicStick,
} from "@element-plus/icons-vue";
import { useAuthStore } from "@/stores/useAuthStore";

const authStore = useAuthStore();
const InstructionsTitle = " 使用说明";
const ContributionTitle = " 贡献工具";
const ContactUsTitle = " 联系我们";
const handleInstructions = () => {
  console.log("handleInstructions");
};
const handleContribution = () => {
  console.log("handleContribution");
};
const handleContactUs = () => {
  console.log("handleContactUs");
};
</script>

<template>
  <el-dropdown class="user-dropdown">
    <div class="user-info">
      <span class="help-content">使用帮助</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleInstructions">
          <el-icon><HelpFilled /></el-icon>使用说明
        </el-dropdown-item>
        <el-dropdown-item @click="authStore.open(() => ContributionTitle)">
          <el-icon><MagicStick /></el-icon>贡献工具
        </el-dropdown-item>
        <el-dropdown-item @click="authStore.open(() => ContactUsTitle)">
          <el-icon><Connection /></el-icon>联系我们
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped>
.user-dropdown {
  cursor: pointer;
  border: none;
  outline: none !important;
}

.user-dropdown:hover,
.user-dropdown:focus,
:deep(.el-dropdown:focus),
:deep(.el-dropdown:focus-visible) {
  border: none;
  outline: none !important;
  box-shadow: none !important;
}
.user-dropdown:hover {
  border: none;
}
:deep(.el-dropdown) {
  outline: none !important;
}

:deep(.el-dropdown:focus-visible) {
  outline: none !important;
  box-shadow: none !important;
}

:deep(.el-focus-trap) {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.user-dropdown {
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 4px;
  margin: 2px 4px;
  border-radius: 6px;
  transition: background-color 0.2s;
  outline: none !important;
}

.user-info:hover {
  background-color: #cccccc4d;
}
.help-content {
  min-height: 35px;
  line-height: 35px;
  color: var(--text-color);
  font-size: 16px;
  white-space: nowrap;
}
::v-deep(.el-icon:hover) {
  color: var(--text-color) !important;
}
</style>
