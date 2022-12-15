// 使用 Jest 的 Spy 和扩展 expect 来 Mock `window.location`
import "jest-location-mock";

// 屏蔽代码中的console代码，避免控制台打印很多的干扰信息
import mockConsole from "jest-mock-console";
mockConsole()