const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Can't be blank"]
  },
  lastName: {
    type: String,
    required: [true, "Can't be blank"]
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Can't be blank"]
  },
  password: {
    type: String,
    required: [true, "Can't be blank"]
  },
  picture: {
    type: String,
  },
  newMessages: {
    type: Number,
    default: {}
  }
}, {minimize: false});

UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, undefined, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next(); 
    })
  });
})

UserSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

UserSchema.statics.findByCredentials = async function (username, password) {
    const user = await User.findOne({username});
    if (!user) throw new Error('invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('invalid email or password');

    return user;
}

const User = mongoose.model('User', UserSchema)
module.exports = User