import mongoose from "mongoose";
import Story from "../models/storyContent.js";

const getStories = async (req, res) => {
  try {
    const story = await Story.find();
    res.status(200).json(story);
  } catch (error) {
    res.Status(404).json({ message: error.message });
  }
};

const createStory = (req, res) => {
  try {
  } catch (error) {}
};

export { getStories, createStory };
