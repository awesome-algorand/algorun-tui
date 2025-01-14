package system

// Interface defines methods for managing and interacting with a system service.
type Interface interface {
	IsInstalled() bool
	IsRunning() bool
	IsService() bool
	SetNetwork(network string) error
	Install() error
	Update() error
	Uninstall() error
	Start() error
	Stop() error
	Restart() error
	UpdateService(dataDirectoryPath string) error
	EnsureService() error
}
