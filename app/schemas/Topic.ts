import mongoose from "mongoose";
const topicSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true, // Ensure this field is required
    },
    explanation: {
        type: String,
        required: true, // Ensure this field is required
    },
    name: {
        type: String,
        required: true, // Ensure this field is required
    },
});

const Topic = mongoose.models?.Topic || mongoose.model('Topic', topicSchema);
export default Topic