  <Accordion
  expanded={expanded}
  sx={{
    mt: 2,
    display: expanded ? "block" : "none",
    boxShadow: "none",
    border: "1px solid",
    borderColor: "divider",
    borderRadius: 3,
    overflow: "hidden",
    "&:before": {
      display: "none",
    },
  }}
>
  <AccordionSummary
    expandIcon={<ChevronDown size={18} />}
  >
    <Typography
      variant="h6"
      fontWeight={700}
    >
      Select Vendors and Create RFQ
    </Typography>
  </AccordionSummary>

  <AccordionDetails>
    <Typography
      variant="body2"
      color="text.secondary"
      mb={3}
    >
      Select vendors and create an RFQ.
    </Typography>

    <Paper
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 2,
      }}
    >
      <Typography
        fontWeight={600}
        mb={2}
      >
        Vendors
      </Typography>

      <Grid
        container
        spacing={1}
      >
        {(vendors || []).map((vendor) => (
          <Grid
            size={{ xs: 12, sm: 6 }}
            key={vendor._id}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedVendors.includes(
                    vendor._id
                  )}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedVendors((prev) => [
                        ...prev,
                        vendor._id,
                      ]);
                    } else {
                      setSelectedVendors((prev) =>
                        prev.filter(
                          (id) =>
                            id !== vendor._id
                        )
                      );
                    }
                  }}
                />
              }
              label={vendor.companyName}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>

    <TextField
      fullWidth
      sx={{ mt: 3 }}
      label="Remarks"
      multiline
      rows={4}
      value={remarks}
      onChange={(e) =>
        setRemarks(e.target.value)
      }
    />

    <Box
      sx={{
        display: "flex",
        gap: 2,
        mt: 3,
      }}
    >
      <Button
        fullWidth
        variant="outlined"
        onClick={() =>
          setExpanded(false)
        }
      >
        Cancel
      </Button>

      <Button
        fullWidth
        variant="contained"
        disabled={
          loading ||
          selectedVendors.length === 0
        }
        onClick={handleCreate}
      >
        Create RFQ
      </Button>
    </Box>
  </AccordionDetails>
</Accordion>