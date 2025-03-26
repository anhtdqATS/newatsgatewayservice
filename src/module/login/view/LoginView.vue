<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import loginApi from "../api/loginApi";
// import { ElNotification } from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";

const router = useRouter();
//declare variable
const loginForm = reactive({
  user: null,
  password: null,
});
const baseForm = ref(null);
const rules = reactive({
  user: [
    { required: true, message: "Please input username", trigger: "change" },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "change",
    },
  ],
});

//submit login form
const submit = () => {
  baseForm.value.validate((valid, fields) => {
    if (valid) {
      openFullScreenLoading();
      login();
    } else {
      console.log("error submit!", fields);
    }
  });
};
//login api
const login = () => {
  loginApi
    .login(loginForm)
    .then((res) => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(
          "dataLogin",
          JSON.stringify({
            user: loginForm.user,
            token: res.data.token,
            dataTime: Date.now(),
            role: res.data.role,
          })
        );
      }
      loginApi.setAuthorizationHeaders(res.data.token);

      // if (typeof localStorage !== "undefined") {
      //   localStorage.setItem(
      //     "dataLogin",
      //     JSON.stringify({
      //       user: loginForm.user,
      //       token: res.data,
      //       dataTime: Date.now(),
      //       role: 10,
      //     })
      //   );
      // }
      // loginApi.setAuthorizationHeaders(res.data);
      setTimeout(() => {
        router.push("/dashboard");
        loading.close();
      }, 2000);
    })
    .catch((err) => {
      loading.close();
      openNotification("Server error");
    });
};

//login success
var loading = null;
const openFullScreenLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
};
//login error
const openNotification = (mess) => {
  ElNotification({
    title: "Error",
    message: mess,
    type: "error",
    offset: 100,
  });
};
</script>

<!-- -----------HTML----------- -->
<template>
  <LayoutGuest>
    <div class="loginForm flex items-center justify-center">
      <center>
        <div class="flex items-center justify-center">
          <div id="login" class="md:w-[60%] w-[120%]">
            <el-form
              label-position="top"
              label-width="100px"
              :model="loginForm"
              size="large"
              :rules="rules"
              ref="baseForm"
              class="mt-5"
            >
              <el-form-item prop="user">
                <el-input
                  v-model="loginForm.user"
                  :prefix-icon="User"
                  :text-color="'red'"
                  ref="customInput"
                  :input-style="{
                    color: 'black',
                    'background-color': 'white',
                    'border-radius':
                      'var(--el-input-border-radius, var(--el-border-radius-base))',
                  }"
                >
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  :prefix-icon="Lock"
                  v-model="loginForm.password"
                  type="password"
                  @keyup.enter="submit"
                  :input-style="{
                    color: 'black',
                    'background-color': 'white',
                    'border-radius':
                      'var(--el-input-border-radius, var(--el-border-radius-base))',
                  }"
                />
              </el-form-item>
            </el-form>
            <el-button type="primary" class="w-full" @click="submit"
              >Login</el-button
            >
          </div>
          <!-- end login -->
          <div class="w-[60%] md:block hidden">
            <img
              class="imgLogo"
              src="/img/ATS_Logo_White_TransResizw.png"
              alt=""
            />
          </div>
        </div>
      </center>
    </div>
  </LayoutGuest>
</template>
<style scoped>
.el-input__wrapper {
  border-radius: 0px;
}
.el-input__wrapper {
  color: black;
}
/*===transition=== */
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
/* ---------- LOGIN ---------- */
.loginForm {
  background: #0264d6;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #0264d6 1%,
    #1c2b5a 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(1%, #0264d6),
    color-stop(100%, #1c2b5a)
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #0264d6 1%,
    #1c2b5a 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    #0264d6 1%,
    #1c2b5a 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    #0264d6 1%,
    #1c2b5a 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    #0264d6 1%,
    #1c2b5a 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0264d6', endColorstr='#1c2b5a',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  width: 100%;
  margin: 0px;
  height: calc(100vh - 0px) !important;
}

@media (min-width: 768px) {
  #login {
    border-right: 1px solid #fff;
    padding: 0px 20px;
    /* width: 59%; */
  }
}

.logo {
  color: #fff;
  font-size: 50px;
  line-height: 125px;
}
.imgLogo {
  width: 90%;
  color: #fff;
}
.text-center {
  width: 100%;
  position: relative;
  height: 100%;
}

/* backdrop css */
</style>
