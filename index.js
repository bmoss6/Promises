/*

Export a function named readDir that:

Takes a directory path as a parameter.

Returns a promise.

Resolves the promise to an array of file names that fall within the directory See fs.readdir

Rejects the promise if the directory cannot be read.
------------------------------------------------------------------------
Export a function named readDirFiles that:

Takes a directory path as a parameter.

Returns a promise.

Resolves the promise to an array of the file's contents in the order in which they are found in the directory.

Rejects the promise if the directory or a file within it cannot be read.

Uses the three previous functions and does not create a new Promise.
*/
var exports = module.exports = {resolvedPath,readFile,readDir,readDirFiles};
function resolvedPath(_dirname, filename)
{
	const path = require('path');
	var done = path.resolve(_dirname, filename);
	return done;
// Returns: '/foo/bar/baz'
	
	
}

 function readFile(filepath)
{
	const fs = require ('fs');
	
	var promise = new Promise(function(resolve,reject)
	{
		fs.readFile(filepath, 'utf8', (err, data) => {
			if (err) 
			{reject(err);
			}
			else
			{
			resolve(data);
			}
				});
		
		
		
	});
	return promise;
}


 function readDir(dirpath)
{
	const fs = require ('fs');
	
	var promise = new Promise(function(resolve,reject)
	{
		
	fs.readdir(dirpath, function (err, files) {
    if (err) {
        reject(Error("Error in Directory"));
    }
		else{
		resolve(files);
		}
		
	});
			
	});
	
	return promise; 
	
}



function readDirFiles(dirpath)
{
	
	var filecontents= [];
	var filesarray = readDir(dirpath);
	return filesarray.then(function(value)
	{
		
		for (var i=0; i<value.length; i++)
		{
			var fullpath = resolvedPath(dirpath,value[i]);
			filecontents.push(readFile(fullpath));
		}
	
		var done = Promise.all(filecontents);
	
		
		return done;
	});
	
	
	
}

// Code derived from https://nodejs.org/api/fs.html