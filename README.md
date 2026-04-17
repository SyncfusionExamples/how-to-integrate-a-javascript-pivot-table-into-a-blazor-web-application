# 🎯 JavaScript Pivot Table Integration with Blazor Web Application

[![License](https://img.shields.io/badge/license-SEE%20LICENSE-blue.svg)](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf)
[![.NET](https://img.shields.io/badge/.NET-7.0-512BD4.svg)](https://dotnet.microsoft.com/)
[![Blazor](https://img.shields.io/badge/Blazor-Server--side-purple.svg)](https://blazor.net/)
[![Status](https://img.shields.io/badge/status-stable-brightgreen.svg)](#)

**Seamless JavaScript Pivot Table integration for Blazor server applications** — Build interactive data analysis dashboards by combining Blazor's robust server-side rendering with a powerful JavaScript Pivot Table component, complete with real-time data aggregation and Excel export capabilities.

## 📋 Repository Description
A production-ready quick-start guide demonstrating seamless JavaScript Pivot Table component integration within a Blazor server-side web application. This repository showcases best practices for JavaScript interoperability, enabling developers to create interactive data visualization and analysis dashboards with minimal configuration.

## ✨ Key Features

- ✅ **JavaScript Pivot Table Integration**: Embed powerful Pivot Table functionality into Blazor applications
- ✅ **Server-Side Data Handling**: Robust ASP.NET Core backend for secure data processing
- ✅ **Interactive Data Visualization**: Real-time pivot operations and dynamic data aggregation
- ✅ **JavaScript Interoperability**: Seamless C# ↔ JavaScript communication patterns
- ✅ **Sample Weather Data**: Pre-configured demo data for rapid prototyping
- ✅ **Responsive Bootstrap Design**: Mobile-friendly UI with modern styling
- ✅ **Export-Ready Architecture**: Compatible with Excel and CSV export mechanisms

## 🛠 Technology Stack

| Component | Version | Purpose |
|-----------|---------|---------|
| **.NET Framework** | 7.0+ | Server-side runtime environment |
| **Blazor** | Server-side | Interactive web UI framework |
| **C#** | 11+ | Backend business logic |
| **JavaScript** | ES6+ | Client-side Pivot Table functionality |
| **Razor** | .NET 7 | Server-side templating engine |
| **Bootstrap** | 5+ | Responsive CSS framework |

## 📦 Prerequisites

Before running this application, ensure you have:
- **.NET 7.0 SDK** or higher ([Download](https://dotnet.microsoft.com/download))
- **Modern web browser**: Chrome, Firefox, Edge, or Safari (latest versions)
- **Code editor**: Visual Studio 2022, VS Code, or JetBrains Rider
- **Basic knowledge**: C# fundamentals, Razor syntax, JavaScript ES6+
- **Git**: For cloning and version control

## 🚀 Quick Start

### Step 1: Clone Repository
```bash
git clone https://github.com/SyncfusionExamples/how-to-integrate-a-javaScript-pivot-table-into-a-blazor-web-application.git
cd how-to-integrate-a-javaScript-pivot-table-into-a-blazor-web-application/BlazorApp
```

### Step 2: Restore & Build
```bash
dotnet restore
dotnet build
```

### Step 3: Run Application
```bash
dotnet run
```

The application will launch at `https://localhost:7000` (or `http://localhost:5000` depending on your configuration).

### Step 4: View Pivot Table
Navigate to the Pivot Table page in the application menu to see the integrated JavaScript component with live weather forecast data.

## 🗂 Project Structure

```
BlazorApp/
├── Pages/                          # Razor pages and components
│   ├── Index.razor                # Home page
│   ├── Counter.razor              # Sample counter component
│   ├── FetchData.razor            # Pivot table integration page
│   ├── Index.razor.cs             # Code-behind for FetchData
│   ├── _Host.cshtml               # Host page
│   └── Error.cshtml               # Error handling page
│
├── Shared/                         # Layout components
│   ├── MainLayout.razor           # Main application layout
│   ├── NavMenu.razor              # Navigation menu
│   └── MainLayout.razor.css       # Layout styles
│
├── Data/                           # Data models and services
│   ├── WeatherForecast.cs         # Data model
│   └── WeatherForecastService.cs  # Backend data provider
│
├── wwwroot/                        # Static files
│   ├── css/                       # Stylesheets
│   │   └── site.css              # Application styles
│   └── scripts/                   # JavaScript
│       └── pivotview.js          # Pivot Table component script
│
├── App.razor                       # Root component
├── _Imports.razor                 # Global imports
├── Program.cs                      # Application startup configuration
├── appsettings.json               # Environment configuration
└── BlazorApp1.csproj             # Project file with dependencies
```

## 🧠 Architecture Overview

### Data Flow Architecture
```
C# WeatherForecastService
          ↓
    Blazor Component (FetchData.razor)
          ↓
    JavaScript Interop (JS.InvokeAsync)
          ↓
    JavaScript Pivot Table Component
          ↓
    Interactive UI & User Interactions
```

### Key Integration Points

**Server-Side (C#)**:
- `WeatherForecastService.cs`: Generates sample weather data
- `Program.cs`: Configures services and Blazor hosting
- `FetchData.razor.cs`: Handles component logic and data binding

**Client-Side (JavaScript)**:
- `pivotview.js`: Initializes and configures Pivot Table component
- Interop calls for data retrieval and UI updates

## 💡 Usage Example

### Access Weather Data with Pivot Table
The `FetchData.razor` page demonstrates data retrieval and pivot table rendering:

```csharp
@page "/fetchdata"
@using BlazorApp.Data
@inject WeatherForecastService ForecastService

<PageTitle>Fetch data</PageTitle>

<h1>Weather forecast</h1>
<p>This component demonstrates fetching data from a service.</p>

@if (forecasts == null)
{
    <p><em>Loading...</em></p>
}
else
{
    <div id="pivotview"></div>
    @* JavaScript initialization in pivotview.js *@
}

@code {
    private WeatherForecast[]? forecasts;

    protected override async Task OnInitializedAsync()
    {
        forecasts = await ForecastService.GetForecastAsync(DateTime.Now);
    }
}
```

## ⚙️ Configuration

### Blazor Settings (`Program.cs`)
```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddScoped<WeatherForecastService>();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();
app.MapBlazorHub();
app.MapFallbackToPage("/_Host");
app.Run();
```

### Data Configuration (`appsettings.json`)
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

## 🧪 Testing & Validation

### Verify Installation
```bash
dotnet --version          # Check .NET version (should be 7.0+)
cd BlazorApp
dotnet run               # Launch application
```

### Expected Output
```
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:7000
```

### Access Application
Open browser and navigate to the printed URL to verify Pivot Table loads correctly.

## ❓ Troubleshooting & FAQ

**Q: "The type or namespace name 'Blazor' cannot be found"**
- Solution: Ensure .NET 7.0+ is installed and project targets correct framework
- Run: `dotnet --version`

**Q: JavaScript Pivot Table component not displaying**
- Solution: Verify `pivotview.js` is loaded in browser DevTools Network tab
- Check: Browser console for JavaScript errors (F12 → Console)

**Q: Port 5000/7000 already in use**
- Solution: Change port in `Properties/launchSettings.json`
- Or run: `dotnet run --urls "https://localhost:8000"`

**Q: Data not loading from service**
- Solution: Verify `WeatherForecastService` is registered in `Program.cs`
- Check: Network calls in browser DevTools (F12 → Network)

## 📚 Resources & Learning

- [Microsoft Blazor Documentation](https://learn.microsoft.com/en-us/aspnet/core/blazor/)
- [JavaScript Interop in Blazor](https://learn.microsoft.com/en-us/aspnet/core/blazor/javascript-interoperability/)
- [ASP.NET Core Web API](https://learn.microsoft.com/en-us/aspnet/core/web-api/)
- [Bootstrap 5 Framework](https://getbootstrap.com/docs/5.0/)
- [MDN Web Documentation](https://developer.mozilla.org/)

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/YourFeature`
3. **Commit** changes: `git commit -m 'Add YourFeature'`
4. **Push** to branch: `git push origin feature/YourFeature`
5. **Open** a Pull Request with detailed description

### Development Setup
```bash
git clone https://github.com/SyncfusionExamples/how-to-integrate-a-javascript-pivot-table-into-a-blazor-web-application
cd repo/BlazorApp
dotnet build
dotnet run
```

## 📄 License

This project is licensed under the **Syncfusion Community License**. See [Syncfusion License](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf) for details.

## 🆘 Support & Community

- 📧 **Issues**: [GitHub Issues](https://github.com/SyncfusionExamples/how-to-integrate-a-javaScript-pivot-table-into-a-blazor-web-application/issues)
- 💬 **Discussions**: GitHub Discussions for Q&A
- 📖 **Documentation**: See repository Wiki for advanced topics
- 🌐 **Community**: Join Blazor community forums and Stack Overflow
