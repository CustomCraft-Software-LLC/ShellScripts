#!/usr/bin/env node
var{execSync:o}=require("child_process"),e=require("path"),_={build_size:e.resolve(__dirname,"../scripts/build_size.sh"),clean_and_rebuild:e.resolve(__dirname,"../scripts/clean_and_rebuild.sh"),clean_unused_dependencies:e.resolve(__dirname,"../scripts/clean-unused-dependencies.sh"),create_component:e.resolve(__dirname,"../scripts/create_component.sh"),create_component_react_native:e.resolve(__dirname,"../scripts/create_component_react_native.sh"),create_screen_react_native:e.resolve(__dirname,"../scripts/create_screen_react_native.sh"),create_route_gatsby:e.resolve(__dirname,"../scripts/create_route_gatsby.sh"),create_env:e.resolve(__dirname,"../scripts/create_env.sh"),create_hook:e.resolve(__dirname,"../scripts/create_hook.sh"),analyze_bundle:e.resolve(__dirname,"../scripts/analyze_bundle.sh"),setup:e.resolve(__dirname,"../scripts/setup.sh"),unused_imports_list:e.resolve(__dirname,"../scripts/unused_imports_list.sh"),unused_imports_uninstall:e.resolve(__dirname,"../scripts/unused_imports_uninstall.sh"),update_dependencies:e.resolve(__dirname,"../scripts/update_dependencies.sh")},s=(a,c)=>{let r=_[a];r||(console.error(`Unknown script: ${a}`),process.exit(1)),console.log(`Running ${r}...`);try{o(`bash "${r}" ${c.join(" ")}`,{stdio:"inherit"})}catch(i){console.error(`Failed to run ${r}: ${i.message}`),process.exit(1)}},n=process.argv.slice(2);n.length===0&&(console.log("Please provide a command to run."),console.log("Available commands: create-component, create-component-react-native, create-screen-react-native, create-env, create-route-gatsby, create-hook, build-size, clean-and-rebuild, setup, unused-imports-list, unused-imports-uninstall, update-dependencies, analyze-bundle"),process.exit(0));var t=n[0];switch(t){case"create-component":s("create_component",n.slice(1));break;case"create-component-react-native":s("create_component_react_native",n.slice(1));break;case"create-screen-react-native":s("create_screen_react_native",n.slice(1));break;case"create-env":s("create_env",[]);break;case"create-route-gatsby":s("create_route_gatsby",n.slice(1));break;case"create-hook":s("create_hook",n.slice(1));break;case"build-size":s("build_size",[]);break;case"clean-and-rebuild":s("clean_and_rebuild",[]);break;case"clean-unused-dependencies":s("clean_unused_dependencies",[]);break;case"setup":s("setup",[]);break;case"unused-imports-list":s("unused_imports_list",[]);break;case"unused-imports-uninstall":s("unused_imports_uninstall",[]);break;case"update-dependencies":s("update_dependencies",[]);break;case"analyze-bundle":s("analyze_bundle",[]);break;default:console.error(`Unknown command: ${t}`),process.exit(1)}
