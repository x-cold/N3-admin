<template>
  <section class="user-edit">
    <n3-form
      ref="form"
      validate
    >
      <n3-form-item
        label="用户名"
        need
        :label-col="3"
      >
        <n3-input
          :rules="[{type:'required'}]"
          v-model="model.username"
          width="320px"
          :custom-validate="usernameValidate"
        >
        </n3-input>
      </n3-form-item>
      <n3-form-item
        label="密码"
        need
        :label-col="3"
      >
        <n3-input
          v-model="model.password"
          width="320px"
          :rules="[{type:'required'}]"
          :custom-validate="passwordValidate"
          class="fl"
        >
        </n3-input>
        <div class="i-tips">
          <n3-tooltip content="随机生成" placement="top" trigger="hover">
            <n3-icon @click.native="randomPasswd" class="refresh" type="refresh"></n3-icon>
          </n3-tooltip>
        </div>
      </n3-form-item>
      <n3-form-item
        label="手机号"
        need
        :label-col="3"
      >
        <n3-input
          :rules="[{type:'required'}]"
          :custom-validate="phoneValidate"
          v-model="model.phone"
          width="320px"
          type="number"
        >
        </n3-input>
      </n3-form-item>
      <n3-form-item
        label="优先级"
        need
        :label-col="3"
      >
        <n3-input
          :rules="[{type:'required'}]"
          v-model="model.priority"
          width="320px"
          class="fl"
        >
        </n3-input>
        <div class="i-tips">
          默认 1
        </div>
      </n3-form-item>
      <n3-form-item
        label="次数限制"
        need
        :label-col="3"
      >
        <n3-select
          v-model="model.limitType"
        >
          <n3-option value="1">套餐A</n3-option>
          <n3-option value="2">套餐B</n3-option>
        </n3-select>
      </n3-form-item>
      <n3-form-item
        label="过期时间"
        need
        :label-col="3"
      >
        <n3-datepicker
          :rules="[{type:'required'}]"
          v-model="model.expireDate"
          format="yyyy-MM-dd"
          class="fl"
        >
        </n3-datepicker>
      </n3-form-item>
      <n3-form-item
        :label-col="3"
      >
        <n3-button
          @click.native="submit"
          type="primary"
          :loading="loading"
          class="submit-btn"
        >
          {{ loading ? '操作中' : '保存' }}
        </n3-button>
      </n3-form-item>
    </n3-form>
  </section>
</template>

<script>
  import API from '../../api'
  import qs from 'qs'
  import { mapState } from 'vuex'
  import { randomPassword, dateFormat } from '../../utils'
  
  export default {
    computed: {
      ...mapState(['user'])
    },
    data () {
      return {
        model: {
          username: '',
          password: '',
          phone: '',
          priority: 1,
          limitType: '1',
          cacheExpireTime: '24',
          expireDate: dateFormat(Date.now(), 'YYYY-MM-DD')
        },
        loading: false
      }
    },
    methods: {
      reload () {
        // 重置表单
        this.model = {
          username: '',
          password: '',
          phone: '',
          priority: 1,
          limitType: '1',
          cacheExpireTime: '24',
          expireDate: dateFormat(Date.now(), 'YYYY-MM-DD')
        }
        this.loading = false
      },
      // Random Pass
      randomPasswd () {
        this.model.password = randomPassword(18)
      },
      addUser () {
        let cond = Object.assign({}, this.model)
        // cond.expireDate = new Date(cond.expireDate).valueOf()
        this.loading = true
        this.$http.post(API.USER_ADD, qs.stringify(cond))
          .then(data => {
            this.loading = false
            this.n3Alert({
              content: '添加成功~',
              type: 'success',
              placement: 'top-right',
              duration: 2000,
              width:'240px' // 内容不确定，建议设置width
            })
            this.$router.push('/table/')
          })
          .catch(error => {
            this.loading = false
            this.n3Alert({
              content: '添加失败，请刷新重试~',
              type: 'danger',
              placement: 'top-right',
              duration: 2000,
              width:'240px' // 内容不确定，建议设置width
            })
          })
      },
      submit () {
        this.$refs.form.validateFields(result => {
          if (!result.isvalid) {
            return
          }
          return this.addUser()
        })
      },
      passwordValidate (val) {
        if (val && val.length > 5 && val.length < 19) {
          return {
            validStatus: 'success'
          }
        } else {
          return {
            validStatus: 'error',
            tips: '密码长度为6-18位'
          }
        }
      },
      phoneValidate (val) {
        if (/^\d{11}$/.test(val)) {
          return {
            validStatus: 'success'
          }
        } else {
          return {
            validStatus: 'error',
            tips: '请输入11位手机号'
          }
        }
      },
      usernameValidate (val) {
        if (val && val.length > 5 && val.length < 19) {
          return {
            validStatus: 'success'
          }
        } else {
          return {
            validStatus: 'error',
            tips: '账户名长度为6-18位'
          }
        }
      }
    },
    watch: {
      '$route' () {
        if (['normalForm'].indexOf(this.$route.name) > -1) {
          this.reload()
        }
      }
    },
    created () {
      this.reload()
    }
  }
</script>

<style lang="less">
  .user-edit {
    background: #fff;
    .submit-btn {
      width: 320px;
    }
    .refresh {
      cursor: pointer;
    }
    .i-tips {
      float: left;
      padding-left: 10px;
      color: #999;
    }
  }
</style>