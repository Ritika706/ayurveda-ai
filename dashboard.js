// Dashboard functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("Ayurveda AI Dashboard loaded");

  // Initialize dashboard
  initializeDashboard();

  // Add event listeners
  addEventListeners();

  // Start periodic updates
  startPeriodicUpdates();
});

// Initialize dashboard components
function initializeDashboard() {
  // Animate progress bars
  animateProgressBars();

  // Set up search functionality
  setupSearch();

  // Initialize tooltips
  initializeTooltips();

  // Load user preferences
  loadUserPreferences();
}

// Animate progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");

  progressBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    }, index * 200);
  });
}

// Setup search functionality
function setupSearch() {
  const searchInput = document.querySelector(".search-input");

  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
    searchInput.addEventListener("focus", showSearchSuggestions);
    searchInput.addEventListener("blur", hideSearchSuggestions);
  }
}

// Handle search input
function handleSearch(event) {
  const query = event.target.value.toLowerCase();
  console.log("Searching for:", query);

  // Simulate search functionality
  if (query.length > 2) {
    // Show search results or filter content
    filterDashboardContent(query);
  } else {
    // Reset filter
    resetDashboardFilter();
  }
}

// Filter dashboard content based on search
function filterDashboardContent(query) {
  const searchableElements = document.querySelectorAll(
    ".recommendation-item, .symptom-item"
  );

  searchableElements.forEach((element) => {
    const text = element.textContent.toLowerCase();
    if (text.includes(query)) {
      element.style.display = "";
      element.style.opacity = "1";
    } else {
      element.style.opacity = "0.3";
    }
  });
}

// Reset dashboard filter
function resetDashboardFilter() {
  const searchableElements = document.querySelectorAll(
    ".recommendation-item, .symptom-item"
  );

  searchableElements.forEach((element) => {
    element.style.display = "";
    element.style.opacity = "1";
  });
}

// Show search suggestions
function showSearchSuggestions() {
  // Implement search suggestions dropdown
  console.log("Showing search suggestions");
}

// Hide search suggestions
function hideSearchSuggestions() {
  // Hide search suggestions dropdown
  setTimeout(() => {
    console.log("Hiding search suggestions");
  }, 200);
}

// Add event listeners
function addEventListeners() {
  // Notification button
  const notificationBtn = document.querySelector(".notification-btn");
  if (notificationBtn) {
    notificationBtn.addEventListener("click", handleNotificationClick);
  }

  // Reminder buttons
  const reminderBtns = document.querySelectorAll(".reminder-btn");
  reminderBtns.forEach((btn) => {
    btn.addEventListener("click", handleReminderClick);
  });

  // Log symptoms button
  const logSymptomsBtn = document.querySelector(".log-symptoms-btn");
  if (logSymptomsBtn) {
    logSymptomsBtn.addEventListener("click", handleLogSymptoms);
  }

  // Analytics button
  const analyticsBtn = document.querySelector(".analytics-btn");
  if (analyticsBtn) {
    analyticsBtn.addEventListener("click", handleViewAnalytics);
  }
  // Symptom items (for editing)
  const symptomItems = document.querySelectorAll(".symptom-item");
  symptomItems.forEach((item) => {
    item.addEventListener("click", handleSymptomEdit);
  });
}

// Handle notification click
function handleNotificationClick() {
  console.log("Notification clicked");
  showNotification("You have 3 new recommendations!", "info");

  // Remove notification badge
  const badge = document.querySelector(".notification-badge");
  if (badge) {
    badge.style.display = "none";
    setTimeout(() => {
      badge.style.display = "block";
    }, 5000);
  }
}

// Handle reminder button click
function handleReminderClick(event) {
  const button = event.target;
  const itemTitle = button
    .closest(".recommendation-item")
    .querySelector(".item-title").textContent;

  console.log("Setting reminder for:", itemTitle);

  // Simulate setting reminder
  button.textContent = "Reminder Set!";
  button.style.background = "#28a745";
  button.style.color = "white";
  button.style.borderColor = "#28a745";

  setTimeout(() => {
    button.textContent = "Set Reminder";
    button.style.background = "";
    button.style.color = "";
    button.style.borderColor = "";
  }, 2000);

  showNotification(`Reminder set for ${itemTitle}`, "success");
}

// Handle log symptoms
function handleLogSymptoms() {
  console.log("Opening symptom logging interface");
  showNotification("Symptom logging interface would open here", "info");

  // Simulate logging symptoms
  setTimeout(() => {
    updateSymptomData();
  }, 1000);
}

// Handle view analytics
function handleViewAnalytics() {
  console.log("Opening detailed analytics");
  showNotification("Detailed analytics would open here", "info");
}
// Handle symptom edit
function handleSymptomEdit(event) {
  const symptomItem = event.currentTarget;
  const symptomName = symptomItem.querySelector("h4").textContent;

  console.log("Editing symptom:", symptomName);
  showNotification(`Editing ${symptomName} - feature would open here`, "info");
}
// Update symptom data (simulation)
function updateSymptomData() {
  const symptoms = document.querySelectorAll(".symptom-item");

  symptoms.forEach((symptom, index) => {
    setTimeout(() => {
      // Simulate data update
      const severitySpan = symptom.querySelector(".severity");
      const trendIcon = symptom.querySelector(".trend");
      const trendBadge = symptom.querySelector(".trend-badge");

      // Random updates (simulation)
      if (Math.random() > 0.7) {
        const currentSeverity = parseInt(severitySpan.textContent);
        const change = Math.random() > 0.5 ? 1 : -1;
        const newSeverity = Math.max(1, Math.min(10, currentSeverity + change));

        severitySpan.textContent = `${newSeverity}/10`;

        // Update severity color
        if (newSeverity <= 3) {
          severitySpan.className = "severity low";
        } else if (newSeverity <= 6) {
          severitySpan.className = "severity moderate";
        } else {
          severitySpan.className = "severity high";
        }
      }
    }, index * 300);
  });

  showNotification("Symptoms logged successfully!", "success");
}

// Show notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Style notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 1.5rem",
    borderRadius: "0.5rem",
    color: "white",
    fontWeight: "500",
    zIndex: "1000",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
    maxWidth: "300px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  });

  // Set background color based on type
  const colors = {
    success: "#28a745",
    error: "#dc3545",
    warning: "#ffc107",
    info: "#007bff",
  };
  notification.style.backgroundColor = colors[type] || colors.info;

  // Add to document
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after delay
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Initialize tooltips
function initializeTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]");

  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", showTooltip);
    element.addEventListener("mouseleave", hideTooltip);
  });
}

// Show tooltip
function showTooltip(event) {
  const element = event.target;
  const tooltipText = element.getAttribute("data-tooltip");

  if (!tooltipText) return;

  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = tooltipText;

  Object.assign(tooltip.style, {
    position: "absolute",
    background: "rgba(0,0,0,0.8)",
    color: "white",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    fontSize: "0.875rem",
    zIndex: "1000",
    whiteSpace: "nowrap",
    pointerEvents: "none",
  });

  document.body.appendChild(tooltip);

  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${
    rect.left + rect.width / 2 - tooltip.offsetWidth / 2
  }px`;
  tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;

  element._tooltip = tooltip;
}

// Hide tooltip
function hideTooltip(event) {
  const element = event.target;
  if (element._tooltip) {
    element._tooltip.remove();
    delete element._tooltip;
  }
}

// Load user preferences
function loadUserPreferences() {
  // Simulate loading user preferences from localStorage
  const preferences =
    JSON.parse(localStorage.getItem("ayurveda-preferences")) || {};

  console.log("Loading user preferences:", preferences);

  // Apply preferences (theme, notifications, etc.)
  if (preferences.theme) {
    document.body.classList.add(`theme-${preferences.theme}`);
  }
}

// Save user preferences
function saveUserPreferences(preferences) {
  localStorage.setItem("ayurveda-preferences", JSON.stringify(preferences));
  console.log("Saved user preferences:", preferences);
}

// Start periodic updates
function startPeriodicUpdates() {
  // Update stats every 30 seconds (simulation)
  setInterval(() => {
    updateWellnessStats();
  }, 30000);
}
// Update wellness stats
function updateWellnessStats() {
  console.log("Updating wellness stats...");

  // Simulate slight changes in stats
  const statValues = document.querySelectorAll(".stat-value");

  statValues.forEach((stat) => {
    if (stat.textContent.includes("%")) {
      const currentValue = parseInt(stat.textContent);
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
      const newValue = Math.max(0, Math.min(100, currentValue + change));

      if (newValue !== currentValue) {
        stat.textContent = `${newValue}%`;

        // Update progress bar
        const progressBar = stat
          .closest(".stat-card")
          .querySelector(".progress-fill");
        if (progressBar) {
          progressBar.style.width = `${newValue}%`;
        }
      }
    }
  });
}
// Utility functions
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

// Export functions for external use
window.AyurvedaDashboard = {
  showNotification,
  updateWellnessStats,
  saveUserPreferences,
  loadUserPreferences,
};

// Initialize dashboard when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeDashboard);
} else {
  initializeDashboard();
}
