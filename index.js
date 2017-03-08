/**
 * Created by Alone on 2017/3/8.
 */
'use strict';
const merge = require('merge');
const tracer = require('tracer');
const path = require('path');
const fs = require("fs");
const util = require("util");
const findLog = (parent) => {
    let filePath = path.join(parent, 'logger.js');
    if(fs.existsSync(filePath)) {
        return require(filePath);
    }
    let files = fs.readdirSync(parent);
    let obj = null;
    for (let file of files) {
        file = path.join(parent, file);
        let stats = fs.statSync(file);
        if(stats.isDirectory()){
            obj = findLog(file);
        }
    }
    return obj;
};
const config = findLog(process.cwd());
console.info(`tracer logger config: ${util.inspect(config)}`);
if (config.root) {
    let root = path.resolve(__dirname, config.root);
    if (!fs.existsSync(root)) {
        fs.mkdirSync(root);
        console.info(`tracer logger mkdir ${root}`);
    }
}

module.exports = tracer.dailyfile(config);