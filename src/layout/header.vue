<template>
  <n3-row class="header">
    <n3-column :col="12">
      <n3-column :col="10" style="font-size: 26px;">
        <img src="../assets/logo.png" class="logo"> <span>N3-Admin</span>
      </n3-column>
      <n3-column :col="2">
        <div class="logout">
          <n3-tooltip class="tip-logout" content="登出" placement="bottom" trigger="hover">
            <n3-icon size="20px" type="sign-out" @click.native="logout"></n3-icon>
          </n3-tooltip>
        </div>
      </n3-column>
    </n3-column>
  </n3-row>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    color: #c0ccda;
  }
  
  .header.fixed {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }
  
  .logo {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }

  .logout {
    float: right;
    padding-right: 20px;
    padding-top: 5px;
  }
  
  .logout i {
    cursor: pointer;
  }

  .username {
    font-size: 18px;
  }
</style>
