const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const logginCheck = require('../utils/auth')