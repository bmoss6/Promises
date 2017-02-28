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

function resolvedPath(_dirname, filename)
{
	const path = require('path');
	var done = path.resolve(_dirname, filename);
	return done;
// Returns: '/foo/bar/baz'
	
	
}
export {resolvedPath};
 function readFile(filepath)
{
	const fs = require ('fs');
	
	var promise = new Promise(function(resolve,reject)
	{
		fs.readFile('/etc/passwd', 'utf8', (err, data) => {
			if (err) 
			{resolve(Error("Cannot Read File"));
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
		
	fs.readdir(p, function (err, files) {
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


/*
function readDirFiles(dirpath)
{
	const fs = require ('fs');
	
	var promise = new Promise(function(resolve,reject)
	{
		var filecontents;
		var filesarray = readDir(dirpath);
		for (int i=0; i<filesarray.length; i++)
		{
			filecontents.push(readfile(filesarray[i]));
		}
		resolve(filecontents);
		
		reject(Error("ERROR HAPPENED IN READ DIR FILES");
			
	});
	
	return promise; 
	
}
*/
