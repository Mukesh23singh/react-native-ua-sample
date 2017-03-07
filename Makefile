setup:
	@npm install
reset:
	@watchman watch-del-all
	@rm -rf node_modules
	@npm cache clean
open-ios:
	@open ios/Example.xcodeproj
