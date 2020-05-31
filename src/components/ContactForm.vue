<template>
  <modal name="contact-form" class="contact-form" height="550" :adaptive="true">
    <div class="contact-form__content">
      <button class="contact-form__close" @click="hideContact();">
        <g-image src="@/assets/images/close.svg" />
      </button>
      <h2 class="contact-form__heading">Let's Talk!</h2>
      <p>Got an idea or an existing project you want to collaborate on? Send me a message!</p>
      <div v-if="isSending" class="loading">Sendig...</div>
      <div v-if="isSent" class="loading">Message Sent! Thank you!</div>

      <form class="form" @submit="onSubmit">
        <input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
        <input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
        <textarea name="body" v-model="contact.body" rows="4" placeholder="Message"></textarea>
        <button class="button" :disabled="isSent">Send</button>
      </form>
    </div>
  </modal>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        contact: {
          name: '',
          email: '',
          message: '',
        },
        isSending: false,
        isSent: false
      }
    },
    methods: {
      clearForm() {
        for (let field in this.contact) {
          this.contact[field] = ''
        }
      },
      onSubmit(evt) {
        evt.preventDefault();
        this.isSending = true;
        setTimeout(() => {
          // Build for data
          let form = new FormData();
          for (let field in this.contact) {
            form.append(field, this.contact[field]);
          }
          // Send form to server
          axios.post('https://api.niftystack.io/v1/messages/', form).then((response) => {
            this.clearForm();
            this.isSending = false;
            this.isSent = true;
          }).catch((e) => {
            console.log(e)
          });
        }, 1000);
      },
      hideContact () {
        this.$modal.hide('contact-form');
      }
    }
  };
</script>

<style lang='scss'>
.contact-form {
  display: none;

  &.v--modal-overlay {
    display: block;
  }
}
.contact-form__content {
  background-color: rgb(33, 33, 33);
  height: 500px;
  padding: 2rem;
  position: relative;

  p {
    color: rgba(255, 255, 255, 0.6);
  }
}

.contact-form__close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  appearance: none;
  background: transparent;
  border: 0px;

  img {
    width: 30px;
  }
}

.contact-form__heading {
  color: #fff;
  font-family: 'Montserrat Alternates', sans-serif;
}

.loading {
  color: #fff;
  font-size: 14px;
  margin-bottom: 1rem;
}

.contact-form .form {
	display: flex;
	flex-direction: column;
	font-size: 16px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
	border: solid 1px #e8e8e8;
	padding: 10px 7px;
	margin-bottom: 15px;
	outline: none;
}

.contact-form textarea {
	resize: none;
}

.contact-form .button {
  display: inline-block;
  padding: 0px 70px 0px 20px;
  align-self: flex-end;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  position: relative;
  line-height: 55px;
  transition: all 0.5s ease;
  -webkit-transition: all .5s ease;
  border: 2px solid #f85ccf;
  background: #f85ccf;
  min-width: 200px;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    right: 30px;
    bottom: 42%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 20;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    box-sizing: border-box;
    transition: all 0.5s ease;
    -webkit-transition: all .5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 20;
    right: 18px;
    bottom: 12px;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-radius: 50px;
    transition: all 0.5s ease;
    -webkit-transition: all .5s ease;
  }

  &:hover {
    border: 2px solid #c648b1;
    background: #c648b1;
  }

  &:disabled {
    opacity: 0.5;
  }
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
	font-size: 15px;
	border-radius: 3px
}
</style>