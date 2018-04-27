/*jslint node: true */
"use strict";

if (global._bMillixCoreLoaded)
	throw Error("Looks like you are loading multiple copies of millixcore, which is not supported.\nRunnung 'npm dedupe' might help.");

global._bMillixCoreLoaded = true;
