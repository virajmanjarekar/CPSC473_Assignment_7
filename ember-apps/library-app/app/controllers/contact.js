import Ember from 'ember';

export default Ember.Controller.extend({
emailAddress: '',
  textmessage: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed('textmessage','emailAddress', function(){
    return !(this.get('textmessage') && this.get('emailAddress'));
  }),
//isDisabled: Ember.computed.and('isValid', 'isValidMessage'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')} and the message is :${this.get('textmessage')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon. Email address: ${this.get('emailAddress')} and the message is : ${this.get('textmessage')} `);
      this.set('emailAddress', 'textmessage', '');
    }
  }

});
