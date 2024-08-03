const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const DnDUserSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	campaigns: {
		type: Array,
		default: [],
	},
});

DnDUserSchema.pre("save", function (next) {
	const user = this;
	if (this.isModified("password") || this.isNew) {
		bcrypt.genSalt(10, function (saltError, salt) {
			if (saltError) {
				return next(saltError);
			} else {
				bcrypt.hash(user.password, salt, function (hashError, hash) {
					if (hashError) {
						return next(hashError);
					}
					user.password = hash;
					next();
				});
			}
		});
	} else {
		return next();
	}
});

DnDUserSchema.methods.validatePassword = async function validatePassword(
	password,
	hash
) {
	try {
		const result = await bcrypt.compare(password, hash);
		return result;
	} catch (e) {
		console.log("\n\n e in validating password ? ", e, "\n\n");
	}
};

const DnDUser = mongoose.model("DnDUser", DnDUserSchema);

module.exports = DnDUser;
