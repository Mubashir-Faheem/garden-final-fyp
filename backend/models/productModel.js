import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)


const replySchema = mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
  }, text: {
      type: String, required: true
  }, likes: [{
      user: {
          type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User', unique: true
      }
  }]
}, {
  timestamps: true,
})



const questionSchema = mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
  }, question: {
      type: String, required: true
  },replies:[replySchema]
}, {
  timestamps: true,
})



const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    image4: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    care: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    question:[questionSchema]
    // replies: [replySchema],
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
